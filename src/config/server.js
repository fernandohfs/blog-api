import Hapi from "@hapi/hapi";

class Server {
  constructor() {
    this.server = Hapi.server({
      host: "localhost",
      port: 3333
    });
  }

  init() {
    this.server.start();
    console.log(`Server running on ${this.server.info.uri}`);
  }
}

new Server().init();
