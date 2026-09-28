# Plano de Teste — Login Magazine Luiza

## Estratégia

Combinação de teste funcional baseado em casos pré-definidos (positivos e negativos) com teste exploratório livre sobre o formulário, para identificar comportamentos não previstos nos casos formais.

## Cenários mapeados

| Cenário | Categoria | Prioridade |
|---|---|---|
| E-mail correto + senha correta | Caminho feliz | Alta |
| E-mail correto + senha incorreta | Negativo | Alta |
| E-mail sem "@" | Validação de formato | Alta |
| Campo de senha vazio | Campo obrigatório | Alta |
| Campo de e-mail vazio | Campo obrigatório | Alta |
| Toggle "mostrar senha" | Usabilidade | Média |
| Senha abaixo do limite mínimo de caracteres | Validação de regra de negócio | Média |

## Critérios de aceite

- Mensagens de erro devem ser claras e específicas por tipo de falha
- Sistema não deve revelar se o e-mail existe ou não na base (proteção contra enumeração de usuários)
- Campos obrigatórios vazios devem bloquear o submit com indicação visual
- Toggle de senha deve alternar corretamente entre texto oculto e visível

## Riscos identificados antes da execução

- Possível inconsistência entre mensagem de erro para "e-mail não cadastrado" e "senha incorreta" (risco de vazamento de informação sobre existência de conta)
