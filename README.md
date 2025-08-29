# Cadastro de Alunos e Professores - Backend

Este projeto é um **backend** desenvolvido em **Node.js**, **Express** e **PostgreSQL** utilizando o **Prisma ORM**.  
Ele segue o padrão **MVC** (Model-View-Controller) e fornece uma **API RESTful** para gerenciar alunos e professores de uma escola.

---

## Funcionalidades

- Cadastro, listagem, atualização e exclusão de **alunos**  
- Cadastro, listagem, atualização e exclusão de **professores**  

---

## Tecnologias Utilizadas

- Node.js  
- Express  
- PostgreSQL  
- Prisma ORM  
- Insomnia / Postman para testes  

---

## Estrutura do Projeto

cadastro-de-alunos-backend/
├── prisma/
│ └── schema.prisma
├── src/
│ ├── controllers/
│ │ ├── alunoController.js
│ │ └── professorController.js
│ ├── routes/
│ │ ├── alunoRoutes.js
│ │ └── professorRoutes.js
│ └── server.js
├── .gitignore
├── .env
├──
package.json
└── README.md

## Instalação e Configuração

1. Clone o repositório:

```bash
git clone https://github.com/Lanna-Maria/cadastro-de-alunos-backend.git
cd cadastro-de-alunos-backend

2. Instale as dependências:

npm install

3. Configure o arquivo .env com sua conexão do PostgreSQL:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/cadastro_de_alunos"
   
4. Rode as migrações do Prisma:

npx prisma migrate dev --name init
  
5. Inicie o servidor:

npx nodemon src/server.js






