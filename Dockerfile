# syntax=docker/dockerfile:1

# -----------------------------------------------------------------------------
# Stage 1: Base & Dependencies
# -----------------------------------------------------------------------------
FROM node:22-alpine AS deps
WORKDIR /app

# Copy dependency specifications first to leverage Docker layer caching
COPY package.json package-lock.json .npmrc ./
RUN npm ci

# -----------------------------------------------------------------------------
# Stage 2: Development (with live-reloading)
# -----------------------------------------------------------------------------
FROM deps AS dev
WORKDIR /app
ENV ASTRO_TELEMETRY_DISABLED=1
EXPOSE 4321
CMD ["npm", "run", "dev"]

# -----------------------------------------------------------------------------
# Stage 3: Builder (Static Generation)
# -----------------------------------------------------------------------------
FROM deps AS builder
WORKDIR /app
COPY . .
ENV ASTRO_TELEMETRY_DISABLED=1
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 4: Production Web Server (Ultra-lightweight Nginx)
# -----------------------------------------------------------------------------
FROM nginx:alpine AS runner

# Remove default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy built static files to /var/www/cv (matches nginx.conf root)
COPY --from=builder /app/dist /var/www/cv
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ > /dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
