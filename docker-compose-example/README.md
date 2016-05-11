## Docker Compose Example

這裡我們用一個簡單的網站系統架構作為範例。以 Docker compose 快速建置 App ，讓您了解 Docker 的快速與便利性。 

### 網站架構

![GITHUB](./img/structure.bmp "NUTC-Cloud")

### 快速建置

首先，進入 `./run.sh` 將您的 IP address 填入 `<your_ip_address>`：

```
#!/bin/sh
PUBLIC_IP="<your_ip_address>"
...
```

接下來，修改 `./run.sh` 執行權限：

```
sudo chmod +x ./run.sh
```

最後，執行 `run.sh` 建置範例：

```
./run.sh
```

