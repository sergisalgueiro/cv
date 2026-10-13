#!/usr/bin/env bash
set -e

# Load custom overrides from .env if present (gitignored)
if [ -f .env ]; then
  set -a
  source .env
  set +a
fi

# Fallback precedence: CLI argument -> .env variable -> default
PI_HOST="${1:-${DEPLOY_HOST:-raspberrypi.local}}"
PI_DEST="${2:-${DEPLOY_DEST:-/var/www/cv}}"

echo "=========================================="
echo "🚀 Building CV Static Site..."
echo "=========================================="
if [ "${BUILD_WITH_DOCKER:-0}" = "1" ] || ! command -v npm >/dev/null 2>&1; then
  echo "🐳 Building with Docker Compose (zero local Node/npm needed)..."
  docker compose run --rm --no-deps build
else
  echo "⚡ Building with local npm..."
  ASTRO_TELEMETRY_DISABLED=1 npm run build
fi

echo ""
echo "=========================================="
echo "📦 Deploying to ${PI_HOST}:${PI_DEST}..."
echo "=========================================="

# Ensure remote web root exists and is owned by current user
ssh "${PI_HOST}" "sudo mkdir -p ${PI_DEST} && sudo chown -R \$USER:\$USER ${PI_DEST}"

# Sync static build files
rsync -avz --delete dist/ "${PI_HOST}:${PI_DEST}/"

# Ensure readable by caddy web server user
ssh "${PI_HOST}" "sudo chmod -R 755 ${PI_DEST}"

# Copy Caddyfile and reload/start Caddy service
echo "⚙️  Updating Caddy configuration..."
scp Caddyfile "${PI_HOST}:/tmp/Caddyfile"
ssh "${PI_HOST}" "sudo mv /tmp/Caddyfile /etc/caddy/Caddyfile && (sudo systemctl is-active --quiet caddy && sudo systemctl reload caddy || sudo systemctl enable --now caddy)"

echo ""
echo "=========================================="
echo "✅ Deployment Successful!"
echo "🌐 CV is live at: http://${PI_HOST} (http://$(ssh "${PI_HOST}" "hostname -I" | awk '{print $1}'))"
echo "=========================================="
