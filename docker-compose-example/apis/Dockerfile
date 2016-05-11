FROM ubuntu:14.04
MAINTAINER James Lee <cjlee8110@gmail.com>
USER root

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - && \
    apt-get install -y nodejs && \
    npm install express --save && \
    mkdir apis

COPY ./codes ./apis

WORKDIR ./apis

RUN npm install mysql promise

EXPOSE 3000

CMD sleep 5 && node app.js
