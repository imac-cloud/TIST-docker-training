## Docker Compose Example

這裡我們使用 Docker Hub 上的 Images 實作，不同於 [docker-compose-example](https://github.com/Ci-Jie/docker-tutorial/tree/master/docker-compose-example) 使用 dockerfile 建置。此種建置方式是利用 Docker Images 的特性，將套件封裝在 Image 中。在建置時期，可減少安裝套件時間，加快建置速度。

### 快速建置

首先，進入 `./docker-compose.yml` 將您的 IP address 填入 `<your_ip_address>`：

```
version: '2'
services:
  db:
    image: cijie/weather-db:1.0.0
    container_name: db
    ports:
      - 3306:3306
  crawler:
    image: cijie/weather-crawler:1.0.3
    container_name: crawler
    environment:
      - DB_IP=<your_ip_address>
  apis:
...
```

接下來，執行 `./docker-compose.yml` 執行建置：

```
docker-compose up -d
```


