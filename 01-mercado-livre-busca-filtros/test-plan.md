# Plano de Teste — Busca e Filtros (Mercado Livre)

## Estratégia

Teste funcional baseado em cenários pré-definidos, cobrindo busca textual e aplicação isolada/combinada de filtros, com verificação de aderência dos resultados aos critérios selecionados.

## Cenários mapeados

| Cenário | Categoria | Prioridade |
|---|---|---|
| Busca por produto existente | Caminho feliz | Alta |
| Busca por termo inexistente | Negativo | Alta |
| Busca com termo parcial/incompleto | Funcional | Média |
| Filtro por faixa de preço | Funcional | Alta |
| Filtro por categoria | Funcional | Alta |
| Filtro por condição (novo/usado) | Funcional | Média |
| Combinação de múltiplos filtros | Funcional | Alta |
| Ordenação por menor/maior preço | Funcional | Média |
| Remoção de filtro aplicado | Usabilidade | Média |

## Critérios de aceite

- Todo resultado exibido deve respeitar 100% dos filtros ativos
- Busca sem resultados deve exibir mensagem clara, sem erro técnico
- Contagem de resultados exibida deve corresponder à quantidade real retornada
- Filtros combinados não devem se anular ou gerar resultados inconsistentes

## Riscos identificados antes da execução

- Possível defasagem entre o filtro de preço aplicado e o preço real exibido nos cards (ex.: frete não incluso no valor filtrado)
