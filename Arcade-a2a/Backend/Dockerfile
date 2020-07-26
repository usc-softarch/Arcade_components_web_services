FROM openjdk:13-alpine

RUN apk add --update nodejs nodejs-npm    
 
COPY /ExpressApp /ExpressApp

EXPOSE 3005
VOLUME ["/tmp"]

CMD npm start --prefix ExpressApp



