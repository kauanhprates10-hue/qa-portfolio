# Como publicar este portfólio no GitHub

## 1. Preencha os dados reais antes de publicar

Em todos os arquivos `test-cases.md` / `ui-checklist.md`, substitua os campos `[preencher]` e `[Pass/Fail]` / `[OK/Inconsistente]` pelos resultados que você observou de fato ao executar os testes. Coloque os prints correspondentes em cada pasta `evidence/`, com os nomes indicados na coluna "Evidência" de cada tabela.

Nos arquivos `bug-reports.md`, preencha pelo menos os bugs reais que você encontrou (se não encontrou nenhum em algum projeto, pode remover o bloco "BUG-02" e deixar só uma observação: "Nenhuma inconsistência crítica encontrada neste teste").

No `README.md` da raiz, substitua `[Sobrenome]` e os links de LinkedIn/e-mail pelos seus dados reais.

## 2. Crie o repositório no GitHub

1. Acesse github.com → clique em **New repository**
2. Nome sugerido: `qa-portfolio`
3. Deixe como **Public** (precisa ser público para servir como portfólio)
4. **Não** marque "Add a README" (você já tem um)
5. Clique em **Create repository**

## 3. Envie os arquivos (via terminal)

Extraia o .zip em uma pasta local e, dentro dela, rode:

```bash
git init
git add .
git commit -m "Primeira publicação: portfólio de testes de QA"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/qa-portfolio.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.

## 4. Alternativa sem terminal (upload manual)

1. No repositório recém-criado, clique em **Add file → Upload files**
2. Arraste a pasta extraída inteira (ou arquivo por arquivo, respeitando a estrutura de subpastas)
3. Escreva uma mensagem de commit (ex.: "Primeira publicação") e clique em **Commit changes**

## 5. Depois de publicado

- Copie o link do repositório (ex.: `https://github.com/seu-usuario/qa-portfolio`)
- Adicione esse link na seção "Projetos" ou "Destaques" do seu LinkedIn
- Adicione também no currículo, próximo à sua formação em ADS
