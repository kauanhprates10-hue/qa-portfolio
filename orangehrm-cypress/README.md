# OrangeHRM — Testes Automatizados com Cypress

Projeto de automação de testes end-to-end (E2E) para validar o login da aplicação de demonstração OrangeHRM.

## Cenários de teste

| Teste | Cenário | Resultado esperado |
|---|---|---|
| Login com sucesso | Login com usuário `Admin` e senha válida | Acesso ao Dashboard |
| Login com falha | Login com usuário `Admin` e senha inválida | Exibição da mensagem `Invalid credentials` |

## Tecnologias

- Cypress
- JavaScript
- Node.js

## Como executar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Abra o Cypress:

   ```bash
   npx cypress open
   ```

3. Selecione **E2E Testing** e execute o arquivo de teste disponível.

## Aplicação testada

[OrangeHRM — Demo](https://opensource-demo.orangehrmlive.com/)