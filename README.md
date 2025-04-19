
# 🔍 GitSearch

Sistema de busca de usuários do GitHub desenvolvido com **React** e estilizado com **Styled Components**.  
Permite consultar perfis públicos utilizando a [API oficial do GitHub](https://api.github.com/), exibindo informações de forma simples, rápida e visual.

---

##  Demonstração

Acesse a aplicação online:  
🔗 [https://renata-aline.github.io/gitsearch](https://renata-aline.github.io/gitsearch)

---

## Funcionalidades

- Buscar perfis de usuários do GitHub digitando o nome de usuário
- Realizar a busca pressionando a tecla **Enter**
-  Clicando no ícone de **lupa**
- Exibir dados como:
  - Foto de perfil
  - Nome
  - Biografia
  - Link direto para o GitHub
- Mensagem de erro caso o usuário não exista
- Estilização com **Styled Components**
- Uso de **ThemeProvider** para gerenciamento de temas
- Layout **responsivo**

---

##  Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [GitHub API](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user)
- JavaScript (ES6+)

---

##  Como usar localmente

1. Clone o repositório:

```bash
git clone https://github.com/renata-aline/gitsearch.git
cd gitsearch
npm install
npm start
