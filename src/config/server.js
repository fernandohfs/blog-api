import Hapi from "@hapi/hapi";
import HapiRouter from "hapi-router";

class Server {
  constructor() {
    this.server = Hapi.server({
      host: "localhost",
      port: 3333
    });
  }

  init() {
    this.server.start();
    this._plugins();
    console.log(`Server running on ${this.server.info.uri}`);
  }

  async _plugins() {
    await this.server.register([
      {
        plugin: HapiRouter,
        options: {
          routes: "src/api/**/**/**.routes.js"
        }
      }
    ]);
  }
}

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

new Server().init();
