FROM node:current-alpine3.17

WORKDIR /var/www/to_do_frontend

RUN apk update \
    && apk upgrade \
    && apk add nano

CMD ["npm", "install"]

RUN adduser -D 1000 -g sudo

USER 1000

CMD ["npm", "start"]

EXPOSE 3000;