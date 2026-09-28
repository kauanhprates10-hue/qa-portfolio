# Casos de Teste — Busca e Filtros (Mercado Livre)

| ID | Cenário | Passos | Resultado esperado | Resultado obtido | Status | Evidência |
|---|---|---|---|---|---|---|
| TC-01 | Busca por produto existente | 1. Acessar a home<br>2. Digitar nome de produto válido na busca<br>3. Pressionar Enter | Lista de resultados relevantes ao termo buscado | [preencher] | [Pass/Fail] | evidence/tc-01.png |
| TC-02 | Busca por termo inexistente | 1. Digitar termo aleatório sem correspondência<br>2. Pressionar Enter | Mensagem informando ausência de resultados, sem erro técnico | [preencher] | [Pass/Fail] | evidence/tc-02.png |
| TC-03 | Busca com termo parcial | 1. Digitar parte do nome de um produto<br>2. Pressionar Enter | Resultados relacionados ao termo parcial digitado | [preencher] | [Pass/Fail] | evidence/tc-03.png |
| TC-04 | Filtro por faixa de preço | 1. Realizar busca<br>2. Aplicar filtro de preço mínimo/máximo | Todos os produtos exibidos dentro da faixa definida | [preencher] | [Pass/Fail] | evidence/tc-04.png |
| TC-05 | Filtro por categoria | 1. Realizar busca<br>2. Selecionar uma categoria no filtro | Resultados pertencentes exclusivamente à categoria selecionada | [preencher] | [Pass/Fail] | evidence/tc-05.png |
| TC-06 | Filtro por condição (novo/usado) | 1. Realizar busca<br>2. Aplicar filtro "novo" ou "usado" | Resultados exibidos correspondem apenas à condição selecionada | [preencher] | [Pass/Fail] | evidence/tc-06.png |
| TC-07 | Combinação de múltiplos filtros | 1. Aplicar filtro de categoria + preço + condição simultaneamente | Resultados atendem a todos os filtros combinados | [preencher] | [Pass/Fail] | evidence/tc-07.png |
| TC-08 | Ordenação por menor preço | 1. Realizar busca<br>2. Selecionar ordenação "menor preço" | Lista ordenada de forma crescente por preço | [preencher] | [Pass/Fail] | evidence/tc-08.png |
| TC-09 | Remoção de filtro aplicado | 1. Aplicar um filtro<br>2. Remover o filtro aplicado | Resultados retornam ao estado sem o filtro removido | [preencher] | [Pass/Fail] | evidence/tc-09.png |

**Observação:** substituir "[preencher]" pelos resultados reais observados durante a execução, e "[Pass/Fail]" pelo status real de cada caso.
