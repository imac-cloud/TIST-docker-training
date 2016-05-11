FROM ubuntu:14.04
MAINTAINER James Lee <cjlee8110@gmail.com>
USER root

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - && \
    apt-get install -y nodejs && \
    mkdir worn && \
    echo '*  *    * * *   root node /crawler/weather.js' >> /etc/crontab   

COPY ./codes ./crawler

WORKDIR ./crawler

RUN chmod 775 weather.js && \
    npm install request cheerio mysql

CMD cron -f
