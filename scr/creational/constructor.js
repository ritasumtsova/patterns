// ES5

// function Server(name, ip) {
//   this.name = name;
//   this.ip = ip;
// }

// Server.prototype.getURL = function() {
//  return `https://${this.ip}:80`;
// }

// ES6

class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getURL() {
    return `https://${this.ip}:80`;
  }
}

// pattern itself
const aws = new Server('aws', '80.56.34.23');
aws.getURL();