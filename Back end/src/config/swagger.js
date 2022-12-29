/* The configuration for the swagger documentation. */
exports.options = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Garage api nodejs",
      description:
        "Garage api is a REST API built with fastify, graphql and mongodb",
      version: "1.0.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info about swagger here",
    },
    host: "localhost",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};
