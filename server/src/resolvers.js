const resolvers = {
    Query: {
      countries: async (_, { page, group, capital, common }, {dataSources}) =>{
        if(page && group) {
            const countries = await dataSources.CountryAPI.getCountries(capital, common)
            const start = (page - 1) * group;
            const end = start + group;
            const paginatedCountries = countries.slice(start, end);

            return paginatedCountries;
        } else {
          return dataSources.CountryAPI.getCountries(capital, common)
        }
    },
    },
  };


  module.exports = resolvers;