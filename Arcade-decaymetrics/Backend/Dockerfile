FROM openjdk:13-alpine

RUN apk add --update nodejs nodejs-npm && apk add perl-dev
  
COPY /ExpressApp /ExpressApp

EXPOSE 3008

VOLUME ["/tmp"]

CMD npm start --prefix ExpressApp




