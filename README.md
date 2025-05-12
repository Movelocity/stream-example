

## 使用OBS推流到服务器

设置 > 直播 > 选择服务 > 自定义服务 

填写服务器为 `rtmp://localhost/live`, 推流码自己定义一个名字，比如 `demo`

然后保存关闭弹窗，点击开始直播

## 在浏览器打开客户端，拉流观看直播

`http://localhost:8000`


## RTMP 服务
在 `node-server-media` 的[文档](https://www.npmjs.com/package/node-server-media)中，`rtmp://localhost/live` 使用的默认端口是 **1935**。

解释：
- RTMP（Real Time Messaging Protocol）是一种流媒体协议，通常用于实时视频流传输。
- 在 `node-server-media` 的配置中，RTMP 服务默认监听的端口是 **1935**，这是 RTMP 的标准端口。
- HTTP 和 WebSocket 的默认端口是 **8000**，用于 HTTP-FLV、WebSocket-FLV 等协议的流媒体传输。

因此，当你使用 `rtmp://localhost/live` 时，应该使用端口 **1935**。