const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAlunos = async (req, res) => {
  const alunos = await prisma.aluno.findMany();
  res.json(alunos);
};

exports.createAluno = async (req, res) => {
  try {
    const { nome, email, idade } = req.body;
    const aluno = await prisma.aluno.create({
      data: { nome, email, idade: parseInt(idade) },
    });
    res.status(201).json(aluno);
  } catch (err) {
    res
      .status(400)
      .json({ error: 'Erro ao cadastrar aluno. Verifique os dados.' });
  }
};

exports.updateAluno = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    const aluno = await prisma.aluno.update({
      where: { id: parseInt(id) },
      data: { nome, email },
    });
    res.json(aluno);
  } catch (err) {
    res.status(404).json({ error: 'Aluno não encontrado.' });
  }
};

exports.deleteAluno = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.aluno.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Aluno excluído com sucesso.' });
  } catch (err) {
    res.status(404).json({ error: 'Aluno não encontrado.' });
  }
};
