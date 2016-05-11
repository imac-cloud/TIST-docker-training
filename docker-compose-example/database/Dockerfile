FROM ubuntu:14.04
MAINTAINER James Lee <cjlee8110@gmail.com>
USER root

COPY ./weather.sql /usr/home/

RUN apt-get update && \
    echo "mysql-server mysql-server/root_password password passwd" | sudo debconf-set-selections && \
    echo "mysql-server mysql-server/root_password_again password passwd" | sudo debconf-set-selections && \
    apt-get install -y mysql-server

RUN service mysql start  && \
    mysql -uroot -ppasswd -e 'create database weather' && \
    mysql -uroot -ppasswd weather < /usr/home/weather.sql && \
    mysql -uroot -ppasswd -e 'CREATE USER "imac"@"%" IDENTIFIED BY "imac"' && \
    mysql -uroot -ppasswd -e 'GRANT ALL ON *.* TO "imac"@"%" IDENTIFIED BY "imac" WITH GRANT OPTION' && \
    sed -i "s/.*bind-address.*/bind-address = 0.0.0.0/" /etc/mysql/my.cnf && \
    service mysql restart

CMD service mysql start && tail -F /var/log/mysql/error.log

EXPOSE 3306

