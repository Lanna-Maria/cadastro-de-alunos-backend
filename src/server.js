const express = require('express');
const app = express();
const alunoRoutes = require('./routes/alunoRoutes');
const professorRoutes = require('./routes/professorRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/alunos', alunoRoutes);
app.use('/professores', professorRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
