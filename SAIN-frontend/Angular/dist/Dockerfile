FROM node:13-alpine
 
#install http-server
RUN npm install http-server -g

COPY /trial /frontend

EXPOSE 4200

CMD http-server /frontend -p 4200 -c-1
  

