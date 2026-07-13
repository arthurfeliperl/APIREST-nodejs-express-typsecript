# APIREST-nodejs-express-typsecript

# API de Usuários (CRUD)

Uma API REST simples desenvolvida para gerenciar o cadastro de usuários. Este projeto foi criado como um desafio prático para consolidar conhecimentos em back-end utilizando Node.js, Express e TypeScript.
---
## Tecnologias Utilizadas

* **Node.js**: Ambiente de execução do JavaScript.
* **Express**: Micro-framework para criação das rotas da API.
* **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
* **Crypto (Node nativo)**: Utilizado para geração de IDs únicos (UUID).
---

##  Funcionalidades
A API permite realizar as quatro operações básicas de um CRUD (Create, Read, Update, Delete):

* Criar um novo usuário.
* Listar todos os usuários cadastrados.
* Buscar um usuário específico pelo ID.
* Atualizar os dados de um usuário existente.
* Deletar um usuário.

> **Nota:** Os dados são armazenados na memória local durante a execução da aplicação (em um array). Ao reiniciar o servidor, os dados são resetados.
---

## Como executar o projeto localmente

### Pré-requisitos
Você precisará ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

### Passos para rodar
1. Faça o clone deste repositório (ou baixe os arquivos).
2. Abra o terminal na pasta do projeto e instale as dependências:
   ```bash
   npm install
