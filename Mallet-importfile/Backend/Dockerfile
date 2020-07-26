FROM openjdk:15-oraclelinux7

RUN yum install -y oracle-nodejs-release-el7 oracle-release-el7 
RUN yum -y install nodejs

COPY /ExpressApp /ExpressApp

EXPOSE 3015

VOLUME ["/tmp"]

CMD npm start --prefix ExpressApp




