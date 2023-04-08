docker_compose_bin := docker-compose -f docker-compose.yml
build:
	$(docker_compose_bin) pull
	$(docker_compose_bin) build --pull
	$(docker_compose_bin) up -d --build --remove-orphans
	make front_install
up:
	$(docker_compose_bin) up -d
down:
	$(docker_compose_bin) down
stop:
	$(docker_compose_bin) stop
restart:
	$(docker_compose_bin) restart
php_cs_fixer:
	$(docker_compose_bin) exec php-fpm php /var/www/html/vendor/friendsofphp/php-cs-fixer/php-cs-fixer fix
php:
	$(docker_compose_bin) exec php-fpm bash
front_watch:
	$(docker_compose_bin) exec front yarn run watch
front_build:
	$(docker_compose_bin) exec front yarn run build
front_install:
	$(docker_compose_bin) exec front /bin/sh -c "yarn install && chown -R node:node ./node_modules"
