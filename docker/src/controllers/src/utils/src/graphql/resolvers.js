const { searchImagesFromAPIs, registerUser, loginUser } = require("../utils/apiUtils");

module.exports = {
  Query: {
    searchImages: async (_, { searchTerm }) => {
      return await searchImagesFromAPIs(searchTerm);
    },
  },
  Mutation: {
    register: (_, { email, password }) => registerUser(email, password),
    login: (_, { email, password }) => loginUser(email, password),
  },
};
