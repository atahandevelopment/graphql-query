
const typeDefs = require('./src/schema')
const {ApolloServer} = require('apollo-server')
const resolvers= require('./src/resolvers')
const CountryAPI = require('./datasources/countries-rest-api')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
   return {
      CountryAPI: new CountryAPI(),
   }
  }
})

server.listen().then(() => {
  console.log(`server running on 4000 Query at : https://studio.apollographql.com/graphql `)
})
