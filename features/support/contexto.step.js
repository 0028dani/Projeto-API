const axios = require("axios").default;
const { setWorldConstructor } = require("@cucumber/cucumber");

class Contexto {
   async consultaApi() {
      var { CEP } = this;
      var url = `https://viacep.com.br/ws/${CEP}/json/`;
      var response = await axios.get(url);
      //console.log(JSON.stringify(response.data))
      return {
         ...response.data
      }
   }
}
setWorldConstructor(Contexto)
