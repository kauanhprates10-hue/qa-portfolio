# Casos de Teste — Cadastro LinkedIn

| ID | Cenário | Passos | Resultado esperado | Resultado obtido | Status | Evidência |
|---|---|---|---|---|---|---|
| TC-01 | Acesso ao formulário "Criar conta" | 1. Acessar linkedin.com<br>2. Clicar em "Criar conta" | Formulário de cadastro exibido corretamente com todos os campos | [preencher] | [Pass/Fail] | evidence/tc-01.png |
| TC-02 | E-mail em formato inválido | 1. No campo de e-mail, inserir texto sem "@" ou domínio inválido<br>2. Clicar em "Continuar" | Mensagem de erro específica sobre formato de e-mail inválido | [preencher] | [Pass/Fail] | evidence/tc-02.png |
| TC-03 | Campo obrigatório vazio | 1. Deixar um campo obrigatório em branco (ex.: nome ou e-mail)<br>2. Clicar em "Continuar" | Sistema bloqueia o avanço e indica o campo pendente | [preencher] | [Pass/Fail] | evidence/tc-03.png |
| TC-04 | Senha curta | 1. Inserir senha com menos caracteres que o mínimo exigido<br>2. Clicar em "Continuar" | Mensagem informando o limite mínimo de caracteres | [preencher] | [Pass/Fail] | evidence/tc-04.png |
| TC-05 | Senha sem números | 1. Inserir senha composta apenas por letras<br>2. Clicar em "Continuar" | Mensagem indicando exigência de número na senha (se essa for a regra) | [preencher] | [Pass/Fail] | evidence/tc-05.png |
| TC-06 | Senha sem letras | 1. Inserir senha composta apenas por números<br>2. Clicar em "Continuar" | Mensagem indicando exigência de letra na senha (se essa for a regra) | [preencher] | [Pass/Fail] | evidence/tc-06.png |

**Observação:** substituir "[preencher]" pelos resultados reais observados durante a execução, e "[Pass/Fail]" pelo status real de cada caso.
