// src/server.js
import { createServer, Response } from 'miragejs';
import Products from './products'

export function makeServer({ environment = 'development' } = {}) {
  console.log(environment);
  let server = createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/products", () => {
        return  new Response(200, {}, Products)
      });
    },
  });
  return server;
}
