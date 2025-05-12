const NodeMediaServer = require('node-media-server');
 
const config = {
  rtmp: {
    port: 1935,  // rtmp://localhost/live 使用 1935 作为默认端口
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },  //配置rtmp服务器，用于设备推流
  http: {
    port: 8000,
    allow_origin: '*'
  },  //配置http服务器，用于客户端拉流
  static: {
    root: './public',    // 静态文件根目录
    router: '/',         // 静态文件路由前缀
    allow_origin: '*'
  }  //配置静态文件服务器，用于客户端拉流
};
 
var nms = new NodeMediaServer(config)
nms.run();//启动流媒体服务器
