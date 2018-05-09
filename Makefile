ROOT_DIR = $(shell pwd)

PHP_CMD_PREFIX = 
NGINX_CMD_PREFIX = 

PREFIX_DOCKER_PHP_FPM = docker exec cross_cookie_php_fpm
PREFIX_DOCKER_NGINX = docker exec cross_cookie_nginx

USE_DOCKER = 0

.DEFAULT_GOAL := help

ifeq ($(docker), 1)
	PHP_CMD_PREFIX = $(PREFIX_DOCKER_PHP_FPM)
	NGINX_CMD_PREFIX = $(PREFIX_DOCKER_NGINX)
	USE_DOCKER = 1
endif

# general
help:
	@echo "Type: make [rule]."
	@echo "Hint: Add parameter 'docker=1' at last to execute on Docker."
	@echo ""
	@echo "Available options are:"
	@echo ""
	@echo "- help"
	@echo "- nginx-reload"
	@echo ""
	@echo "- docker-compose-start"
	@echo "- docker-compose-stop"
	@echo "- docker-compose-start-console"
	@echo "- docker-compose-rebuild"
	@echo ""

docker-compose-start:
	cd docker && \
	    WWW_DIR=$(ROOT_DIR)/app docker-compose up -d

docker-compose-start-console:
	cd docker && \
	    WWW_DIR=$(ROOT_DIR)/app docker-compose up

docker-compose-stop:
	cd docker && \
	    WWW_DIR=$(ROOT_DIR)/app docker-compose down

docker-compose-rebuild:
	cd docker && \
	    WWW_DIR=$(ROOT_DIR)/app docker-compose build --force-rm

nginx-reload:
	$(NGINX_CMD_PREFIX) service nginx reload