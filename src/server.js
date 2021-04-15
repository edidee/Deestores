// src/server.js
import { createServer, Model } from 'miragejs';


export function makeServer({ environment = 'development' } = {}) {
  console.log(environment);
  let server = createServer({
    environment,

    models: {
      products: Model,
    },

    seeds(server) {
      server.create("product", {
        id: 0,
        title: "iphone x case",
        image:
          "https://ae04.alicdn.com/kf/H750156d352f34fcbbc7268fdbc50b31bM.jpg_350x350xz.jpg_.webp",
        price: 365,
        description:
          "Et erat aliquyam et rebum stet et dolor ipsum, clita amet dolor consetetur lorem magna nonumy erat. Et stet sanctus.",
      });
      server.create("product", {
        id: 1,
        title: "iphone x case",
        image:
          "https://ae04.alicdn.com/kf/H750156d352f34fcbbc7268fdbc50b31bM.jpg_350x350xz.jpg_.webp",
        price: 365,
        description:
          "Et erat aliquyam et rebum stet et dolor ipsum, clita amet dolor consetetur lorem magna nonumy erat. Et stet sanctus.",
      });
      server.create("product", {
        id: 2,
        title: "iphone xr case",
        image:
          "https://ae04.alicdn.com/kf/H750156d352f34fcbbc7268fdbc50b31bM.jpg_350x350xz.jpg_.webp",
        price: 405,
        description:
          "Et erat aliquyam et rebum stet et dolor ipsum, clita amet dolor consetetur lorem magna nonumy erat. Et stet sanctus.",
      });
      server.create("product", {
        id: 3,
        title: "iphone 8plus case",
        image:
          "https://ae04.alicdn.com/kf/H750156d352f34fcbbc7268fdbc50b31bM.jpg_350x350xz.jpg_.webp",
        price: 305,
        description:
          "Et erat aliquyam et rebum stet et dolor ipsum, clita amet dolor consetetur lorem magna nonumy erat. Et stet sanctus.",
      });
      server.create("product", {
        id: 4,
        title: "iphone x case",
        image:
          "https://ae04.alicdn.com/kf/H750156d352f34fcbbc7268fdbc50b31bM.jpg_350x350xz.jpg_.webp",
        price: 365,
        description:
          "Et erat aliquyam et rebum stet et dolor ipsum, clita amet dolor consetetur lorem magna nonumy erat. Et stet sanctus.",
      });
      server.create("product", {
        id: 5,
        title: "iphone Xs case",
        image:
          "https://ae04.alicdn.com/kf/H750156d352f34fcbbc7268fdbc50b31bM.jpg_350x350xz.jpg_.webp",
        price: 560,
        description:
          "Et erat aliquyam et rebum stet et dolor ipsum, clita amet dolor consetetur lorem magna nonumy erat. Et stet sanctus.",
      });
      server.create("product", {
        id: 6,
        title: "iphone 11 case",
        image:
          "https://ae04.alicdn.com/kf/H750156d352f34fcbbc7268fdbc50b31bM.jpg_350x350xz.jpg_.webp",
        price: 365,
        description:
          "Et erat aliquyam et rebum stet et dolor ipsum, clita amet dolor consetetur lorem magna nonumy erat. Et stet sanctus.",
      });
      server.create("product", {
        id: 7,
        title: "iphone 11 case",
        image:
          "https://ae04.alicdn.com/kf/H750156d352f34fcbbc7268fdbc50b31bM.jpg_350x350xz.jpg_.webp",
        price: 365,
        description:
          "Et erat aliquyam et rebum stet et dolor ipsum, clita amet dolor consetetur lorem magna nonumy erat. Et stet sanctus.",
      });
      server.create("product", {
        id: 8,
        title: "iphone 11 case",
        image:
          "https://ae04.alicdn.com/kf/H750156d352f34fcbbc7268fdbc50b31bM.jpg_350x350xz.jpg_.webp",
        price: 365,
        description:
          "Et erat aliquyam et rebum stet et dolor ipsum, clita amet dolor consetetur lorem magna nonumy erat. Et stet sanctus.",
      });

    },
    routes() {
      this.namespace = "api";

      this.get("/products", schema => {
        return schema.products.all();
      });
    },
  });
  return server;
}
