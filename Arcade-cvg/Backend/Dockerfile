FROM node:13-alpine

RUN apk add --no-cache python2
 
COPY /ExpressApp /ExpressApp

EXPOSE 3006

VOLUME ["/tmp"]

CMD npm start --prefix ExpressApp



