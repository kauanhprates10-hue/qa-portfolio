# Casos de Teste — Busca (Mercado Livre)

**Pré-condição:** estar na página inicial do Mercado Livre, com campo de busca disponível.

## Cenário 1 — Buscar por um produto existente

| Passo | Ação | Resultado esperado | Status | Resultado obtido | Evidência |
|---|---|---|---|---|---|
| 1 | Acessar o Mercado Livre | O usuário tem acesso à página principal | ✅ Passou | Termo aceito | [imagem](https://www.awesomescreenshot.com/image/63082298?key=45dbe8f3043f446e7e217a58ddb65812) |
| 2 | Colocar "notebook" na barra de busca | O usuário consegue utilizar a barra de busca | ✅ Passou | Busca realizada | [vídeo](https://www.awesomescreenshot.com/video/55974492?key=a299d701581fa01c06a3690b2ef666a7) |
| 3 | Clicar no botão de Buscar | O sistema deve apresentar resultados de notebooks | ✅ Passou | O mesmo que o esperado | [vídeo](https://www.awesomescreenshot.com/video/55974454?key=e5feb75f847e05242fdb45a89e8b1567) |

## Cenário 2 — Buscar por um produto inexistente

| Passo | Ação | Resultado esperado | Status | Resultado obtido | Evidência |
|---|---|---|---|---|---|
| 1 | Acessar o Mercado Livre | O usuário tem acesso à página principal | ✅ Passou | Termo aceito | [imagem](https://www.awesomescreenshot.com/image/63082490?key=2ddf7f1d75ecce53394cca0deda138e8) |
| 2 | Digitar "abcd123" na barra de pesquisa | O usuário consegue utilizar a barra de busca | ✅ Passou | Busca realizada | [vídeo](https://www.awesomescreenshot.com/video/55974534?key=ad17d5a344e5e5aa59b7ff0fb3f1a199) |
| 3 | Clicar no botão de Buscar | Não devem ser apresentados resultados sem relação com o termo pesquisado | ❌ **Falhou** | Foram apresentados produtos aparentemente aleatórios, sem relação com "abcd123" | [vídeo](https://www.awesomescreenshot.com/video/55974560?key=b613c04095aab0c22ecef13bdd0f5ff2) |
