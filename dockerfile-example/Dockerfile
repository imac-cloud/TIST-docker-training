FROM nginx:1.9
MAINTAINER "James Lee <cjlee8110@gmail.com>"

USER root

RUN apt-get update && \
    apt-get install -y vim

WORKDIR /usr/share/nginx/html

COPY ./web/index.html ./
COPY ./img/NUTC_cloud.png ./img/NUTC_cloud.png