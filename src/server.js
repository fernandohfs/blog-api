const Hapi = require("@hapi/hapi");

class Server {
  constructor() {
    this.server = Hapi.server({
      host: "localhost",
      port: 3333
    });
  }
}

module.exports = new Server().server;
