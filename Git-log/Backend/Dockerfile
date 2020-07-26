FROM node:13-alpine

RUN apk add --no-cache git 

COPY /ExpressApp /ExpressApp

EXPOSE 3022

VOLUME ["/tmp"]

CMD npm start --prefix ExpressApp




