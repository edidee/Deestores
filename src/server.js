//src/server.js
import { createServer, Response } from "miragejs";
import Products from "./products.json";

export function makeServer({ environment = "production" } = {}) {
  console.log(environment);
  let server = createServer({
  

    routes() {
      this.namespace = "/api";

      this.get("/products", () => {
        return new Response(200, {}, Products);
      });
    },
  });
  return server;
}
