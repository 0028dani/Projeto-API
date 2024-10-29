#Language: pt-br
Feature: Consulta CEP

    @cep
    Scenario Outline:  Consulta CEP
        Given que estou com o cep <cep>
        When acessar a API
        Then deve apresentar as informacoes de rua '<rua>' e complemento '<complemento>' e bairro '<bairro>' e localidade '<localidade>'
        Examples:
            | cep      | rua                                | complemento | bairro                         | localidade |
            | 02348015 | Praça Ano Internacional da Criança |             | Jardim Leonor Mendes de Barros | São Paulo  |

