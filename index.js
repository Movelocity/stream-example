const NodeMediaServer = require('node-media-server');
 
const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },//配置rtmp服务器，用于设备推流
  http: {
    port: 8000,
    allow_origin: '*'
  }//配置http服务器，用于客户端拉流
};
 
var nms = new NodeMediaServer(config)
nms.run();//启动流媒体服务器
