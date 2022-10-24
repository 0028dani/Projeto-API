const chai = require("chai");
const { assert, expect } = chai;
const deepEqualInAnyOrder = require("deep-equal-in-any-order");
chai.use(deepEqualInAnyOrder);
const { Given, When, Then } = require("@cucumber/cucumber");

Given(/^que estou com o cep (.*)$/, async function (cep) {
    this.CEP = cep;
});

When("acessar a API", async function () {
    var response = await this.consultaApi()
    this.logradouro = response.logradouro;
    this.complemento = response.complemento;
    this.bairro = response.bairro;
    this.localidade = response.localidade;
});

Then("deve apresentar as informacoes de rua {string} e complemento {string} e bairro {string} e localidade {string}", async function (rua, complemento, bairro, localidade) {
    //  console.log("rua cucumber" + rua)
    //  console.log("rua api" + this.logradouro)
    expect(this.logradouro).to.eq(rua);
    expect(this.complemento).to.eq(complemento);
    expect(this.bairro).to.eq(bairro);
    expect(this.localidade).to.eq(localidade);
});

