const { gql } = require("apollo-server-express");

module.exports = gql`
  type Image {
    image_ID: String
    thumbnails: String
    preview: String
    title: String
    source: String
    tags: [String]
  }

  type Query {
    searchImages(searchTerm: String!): [Image]
  }

  type Mutation {
    register(email: String!, password: String!): String
    login(email: String!, password: String!): String
  }
`;
