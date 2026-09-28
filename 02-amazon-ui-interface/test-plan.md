# Plano de Teste — Interface (UI) Amazon.com.br

## Estratégia

Teste exploratório de interface guiado por checklist, cobrindo componentes visuais e interativos da home page, com foco em consistência de design e usabilidade.

## Áreas mapeadas

| Área | Itens verificados | Prioridade |
|---|---|---|
| Barra de busca | Alinhamento, placeholder, foco, ícone de busca | Alta |
| Menu de navegação | Alinhamento, hover, submenu, responsividade | Alta |
| Botão de login/conta | Posicionamento, estado hover, texto | Média |
| Dropdown "Contas e Listas" | Abertura, itens exibidos, fechamento ao clicar fora | Alta |
| Banners/carrosséis | Transição automática, navegação manual (setas/dots), carregamento de imagem | Média |
| Contraste e legibilidade | Texto sobre fundo, botões, links | Média |
| Espaçamento geral | Consistência entre seções da home | Baixa |

## Critérios de aceite

- Elementos interativos devem ter feedback visual claro (hover/foco/clique)
- Alinhamento consistente entre seções da mesma página
- Contraste de texto adequado para leitura (sem sobreposição de cor problemática)
- Dropdowns e menus devem abrir/fechar sem sobreposição incorreta de elementos

## Riscos identificados antes da execução

- Possível inconsistência de alinhamento entre banners de diferentes campanhas
- Comportamento do dropdown "Contas e Listas" pode variar entre usuário logado e deslogado
