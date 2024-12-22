require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("Connected to MongoDB");

  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
};

startServer();
