# Teste de Formulário — Cadastro LinkedIn

## Objetivo

Validar o comportamento do formulário de criação de conta do LinkedIn (linkedin.com), verificando tratamento de erros de validação de e-mail, campos obrigatórios e regras de senha, sem efetivar a criação de conta real.

## Escopo

**Incluso:**
- Acesso ao fluxo "Criar conta"
- Validação de formato de e-mail inválido
- Validação de campos obrigatórios vazios
- Regras de senha (curta, sem números, sem letras)
- Comportamento do botão "Continuar" diante de dados inválidos/válidos

**Fora de escopo:**
- Criação efetiva de conta
- Fluxo de verificação por e-mail/SMS
- Login após cadastro

## Ambiente de teste

- **URL**: linkedin.com/signup
- **Navegador**: [preencher: navegador + versão]
- **Data de execução**: [preencher]

## Ferramentas

Teste manual funcional baseado em casos pré-definidos.

## Arquivos

- [`test-plan.md`](./test-plan.md) — estratégia e cenários mapeados
- [`test-cases.md`](./test-cases.md) — 6 cenários de teste executados com resultados
- [`bug-reports.md`](./bug-reports.md) — lista de erros/inconsistências encontrados
- [`evidence/`](./evidence) — screenshots por caso de teste
