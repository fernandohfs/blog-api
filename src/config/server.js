import dotEnv from "dotenv";
dotEnv.config();

import Hapi from "@hapi/hapi";
import HapiRouter from "hapi-router";
import HapiSequelize from "hapi-sequelizejs";
import HapiAuthJWT from "hapi-auth-jwt2";
import { Sequelize } from "sequelize";

import dbConfig from "./database";

class Server {
  constructor() {
    this.server = Hapi.server({
      host: process.env.HOST,
      port: process.env.PORT
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
        plugin: HapiSequelize,
        options: [
          {
            name: "blog",
            models: ["src/api/**/**/**.models.js"],
            sequelize: new Sequelize(dbConfig),
            sync: true
          }
        ]
      },
      {
        plugin: HapiRouter,
        options: {
          routes: "src/api/**/**/**.routes.js"
        }
      },
      {
        plugin: HapiAuthJWT
      }
    ]);

    this.server.auth.strategy("jwt", "jwt", {
      key: "stubJWT",
      validate: async (decoded, request, h) => {
        return { isValid: true };
      }
    });

    this.server.auth.default("jwt");
  }
}

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

new Server().init();
