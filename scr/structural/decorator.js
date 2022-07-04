class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get ulr () {
    return `https://${this.ip}:${this.port}`;
  }
}

function aws(server) {
  server.isAws = true;
  server.awsInfo = function() {
    return server.url;
  };

  return server;
}

const s1 = aws(new Server('12.45.67.34', 8080));