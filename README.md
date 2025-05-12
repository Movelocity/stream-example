在 `node-server-media` 的[文档](https://www.npmjs.com/package/node-server-media)中，`rtmp://localhost/live` 使用的默认端口是 **1935**。

### 解释：
- RTMP（Real Time Messaging Protocol）是一种流媒体协议，通常用于实时视频流传输。
- 在 `node-server-media` 的配置中，RTMP 服务默认监听的端口是 **1935**，这是 RTMP 的标准端口。
- HTTP 和 WebSocket 的默认端口是 **8000**，用于 HTTP-FLV、WebSocket-FLV 等协议的流媒体传输。

因此，当你使用 `rtmp://localhost/live` 时，应该使用端口 **1935**。