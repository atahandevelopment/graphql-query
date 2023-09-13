const { RESTDataSource} = require('apollo-datasource-rest')

class CountryAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://restcountries.com/v3.1/'; 
    }
  
    getCountries(capital, common) {
      if(!capital && !common) {
        return this.get('all')
      } else if(capital && !common) {
        return this.get(`capital/${capital}`)
      } else if ( !capital && common) {
        return this.get(`name/${common}`)
      }
    }
   }
  
  module.exports = CountryAPI;