// imports

const fastify = require("fastify")({
  logger: true,
});

// external modules

const mongoose = require("mongoose");

//db connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

mongoose
  .connect("mongodb://localhost:27017/MYCARGARAGE", options)
  .then(() => console.log("MongoDB connected… 🐱‍💻"))
  .catch((err) => console.log(err));

fastify.register(require("fastify-cors"), {
  origin: "*",
  credentials: true,
});

module.exports = fastify;
