.PHONY: help dev build prod stop clean deploy shell

help: ## Show this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

dev: ## Start Astro live-reload dev server in Docker (http://localhost:4321)
	docker compose up dev

build: ## Build static assets into ./dist using Docker (zero local tools needed)
	docker compose run --rm build

prod: ## Start production Nginx container serving static files (http://localhost:80)
	docker compose up -d web

stop: ## Stop all running project containers
	docker compose down

clean: ## Stop containers and remove persistent node_modules volume
	docker compose down -v

deploy: ## Build (via Docker if npm missing) and deploy to Raspberry Pi
	./deploy.sh

shell: ## Open an interactive shell inside the Node environment
	docker compose run --rm --entrypoint /bin/sh dev
