// src/server.js
import { createServer, Response } from "miragejs";
import product from "./products";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    routes() {
      this.namespace = "/api";

      this.get("/product", () => {
        return new Response(200, {}, product);
      });
    },
  });

  return server;
}
