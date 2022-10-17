#Language: pt-br
Feature: Consulta CEP

    @teste
    Scenario Outline:  Consulta CEP
        Given que estou com o cep <cep>
        When acessar a API
        Then deve apresentar as informacoes '<rua>'
        Examples:
            | cep      | rua                                |
            | 02348015 | Praça Ano Internacional da Criança |