FROM nginx:latest
MAINTAINER James Lee <cjlee8110@gmail.com>
USER root

COPY ./codes/angular.min.js /usr/share/nginx/html
COPY ./codes/bootstrap /usr/share/nginx/html/bootstrap
COPY ./codes/img /usr/share/nginx/html/img
COPY ./codes/index.css /usr/share/nginx/html
COPY ./codes/index.html /usr/share/nginx/html
COPY ./codes/index.js /usr/share/nginx/html

EXPOSE 80
