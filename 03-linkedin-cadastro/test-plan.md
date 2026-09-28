# Plano de Teste — Cadastro LinkedIn

## Estratégia

Teste funcional de formulário baseado em 6 cenários pré-definidos, cobrindo validação de formato de e-mail, campos obrigatórios e regras de composição de senha, sem completar o cadastro real.

## Cenários mapeados

| Cenário | Categoria | Prioridade |
|---|---|---|
| Acesso ao formulário "Criar conta" | Caminho feliz | Alta |
| E-mail em formato inválido | Validação de formato | Alta |
| Campo obrigatório vazio | Campo obrigatório | Alta |
| Senha curta (abaixo do mínimo) | Validação de regra de negócio | Alta |
| Senha sem números | Validação de regra de negócio | Média |
| Senha sem letras | Validação de regra de negócio | Média |

## Critérios de aceite

- Mensagens de erro específicas para cada tipo de violação (formato de e-mail, campo vazio, regra de senha)
- Botão "Continuar" deve permanecer bloqueado ou exibir erro claro enquanto os dados forem inválidos
- Nenhuma conta deve ser criada durante a execução dos testes

## Riscos identificados antes da execução

- Possível mensagem de erro genérica que não especifica qual regra de senha foi violada
