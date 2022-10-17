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
});

Then("deve apresentar as informacoes {string}", async function (rua) {
    console.log("rua cucumber" + rua)
    console.log("rua api" + this.logradouro)
    expect(this.logradouro).to.eq(rua);
});

