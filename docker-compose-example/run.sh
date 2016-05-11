#!/bin/sh
PUBLIC_IP="<your_ip_address>"

sudo sed -i '' "s/<public_ip>/${PUBLIC_IP}/g" ./web/codes/index.js
sudo sed -i '' "s/<public_ip>/${PUBLIC_IP}/g" ./crawler/codes/weather.js
sudo sed -i '' "s/<public_ip>/${PUBLIC_IP}/g" ./apis/codes/config.js

docker-compose up -d
