const {gql} = require('apollo-server');


const typeDefs = gql`
type Query {
    countries(page: Int, group: Int, capital: String, common: String): [Countries]
}
    type Countries {
        name: CommonName
        officialName: OfficialName
        nativeName: NativeName
        tld: [String]
        cca2: String
        ccn3: Int
        cca3: String
        cioc: String
        independent: Boolean
        status: String
        unMember: Boolean
        currencies: Currency
        population: Int
        flags: Flag
        idd: IDD
        capital: [String]
        altSpellings: [String]
        region: String
        subregion: String
        languages: Language
        translations: Translations
    }

    type CommonName {
        common: String
        official: String
      }
      
      type OfficialName {
        common: String
        official: String
      }
      
      type NativeName {
        nep: NativeNameNep
      }
      
      type NativeNameNep {
        common: String
        official: String
      }
      
      type Currency {
        NPR: CurrencyDetail
      }
      
      type CurrencyDetail {
        name: String
        symbol: String
      }
      
      type IDD {
        root: String
        suffixes: [String]
      }
      
      type Language {
        nep: String
      }
      
      type Translations {
        ara: TranslationDetail
        bre: TranslationDetail
        ces: TranslationDetail
        # Diğer dillerin çevirilerini buraya ekleyebilirsiniz
      }
      
      type TranslationDetail {
        official: String
        common: String
      }

      type Flag {
        png: String
        svg: String
        alt: String
      }

`

module.exports = typeDefs;