import dotEnv from "dotenv";
dotEnv.config();

import Hapi from "@hapi/hapi";
import HapiRouter from "hapi-router";
import HapiSequelize from "hapi-sequelizejs";
import HapiAuthJWT from "hapi-auth-jwt2";
import { Sequelize } from "sequelize";

import Env from "./environment.config";
import dbConfig from "./database.config";

export class Server {
  constructor() {
    this.server = Hapi.server({
      host: Env.HOST,
      port: Env.PORT
    });
  }

  async init() {
    await this.server.start();
    await this._plugins();
    await this._auth();
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
  }

  async _auth() {
    await this.server.auth.strategy("jwt", "jwt", {
      key: Env.JWT_SECRET,
      validate: async (decoded, request, h) => {
        return { isValid: true, credentials: decoded };
      }
    });

    await this.server.auth.default("jwt");
  }
}

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

new Server().init();
