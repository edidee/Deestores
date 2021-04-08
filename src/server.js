// src/server.js
import { createServer, Response } from "miragejs";
import wallet from "./wallets";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "/api";

      this.get("/wallet", () => {
        return new Response(200, {}, wallet);
      });
    },
  });

  return server;
}
