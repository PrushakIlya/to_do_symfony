FROM node:current-alpine3.17

WORKDIR /var/www/to_do_frontend

RUN apk update \
    && apk upgrade \
    && apk add nano

CMD ["npm", "start"]