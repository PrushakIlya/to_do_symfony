FROM php:8.2-fpm-alpine3.17

ARG EXTENTIONS_INSTALL='pgsql pdo_pgsql xdebug-3.2.0 @composer-2.5.4'

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

EXPOSE 9000

RUN apk update \
    && apk upgrade \
    && apk add nano \
    && chmod +x /usr/local/bin/install-php-extensions \
    && install-php-extensions ${EXTENTIONS_INSTALL} \
    && adduser -D 1000 -g sudo \
    && chmod -R 777 /var/www

USER 1000

COPY conf.d/php.ini-local /usr/local/etc/php/conf.d
COPY conf.d/docker-php-ext-xdebug.ini /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

WORKDIR /var/www