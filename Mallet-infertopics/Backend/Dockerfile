#FROM openjdk:15-oraclelinux7
FROM openjdk:13-alpine

#RUN yum install -y oracle-nodejs-release-el7 oracle-release-el7 
#RUN yum -y install nodejs
RUN apk add --no-cache bash
RUN apk add --no-cache nodejs nodejs-npm 

COPY /ExpressApp /ExpressApp

EXPOSE 3017

VOLUME ["/tmp"]

CMD npm start --prefix ExpressApp




