# Casos de Teste — Login Magazine Luiza

| ID | Cenário | Passos | Resultado esperado | Resultado obtido | Status | Evidência |
|---|---|---|---|---|---|---|
| TC-01 | Login com e-mail e senha corretos | 1. Acessar tela de login<br>2. Inserir e-mail válido cadastrado<br>3. Inserir senha correta<br>4. Clicar em "Entrar" | Usuário autenticado e redirecionado para a home/conta | [preencher] | [Pass/Fail] | evidence/tc-01.png |
| TC-02 | Login com e-mail correto e senha incorreta | 1. Inserir e-mail válido<br>2. Inserir senha incorreta<br>3. Clicar em "Entrar" | Mensagem de erro genérica, sem revelar se o e-mail é válido | [preencher] | [Pass/Fail] | evidence/tc-02.png |
| TC-03 | E-mail sem "@" | 1. Inserir texto sem "@" no campo de e-mail<br>2. Inserir senha qualquer<br>3. Clicar em "Entrar" | Validação de formato bloqueia o submit com mensagem específica | [preencher] | [Pass/Fail] | evidence/tc-03.png |
| TC-04 | Campo de senha vazio | 1. Inserir e-mail válido<br>2. Deixar senha em branco<br>3. Clicar em "Entrar" | Sistema bloqueia submit e indica campo obrigatório | [preencher] | [Pass/Fail] | evidence/tc-04.png |
| TC-05 | Campo de e-mail vazio | 1. Deixar e-mail em branco<br>2. Inserir senha qualquer<br>3. Clicar em "Entrar" | Sistema bloqueia submit e indica campo obrigatório | [preencher] | [Pass/Fail] | evidence/tc-05.png |
| TC-06 | Toggle "mostrar senha" | 1. Inserir senha no campo<br>2. Clicar no ícone de mostrar senha | Senha alterna entre oculta (••••) e visível (texto plano) | [preencher] | [Pass/Fail] | evidence/tc-06.png |
| TC-07 | Senha abaixo do limite mínimo | 1. Inserir e-mail válido<br>2. Inserir senha com menos caracteres que o mínimo exigido<br>3. Clicar em "Entrar" | Mensagem informando o limite mínimo de caracteres | [preencher] | [Pass/Fail] | evidence/tc-07.png |

**Observação:** substituir "[preencher]" pelos resultados reais observados durante a execução, e "[Pass/Fail]" pelo status real de cada caso.
