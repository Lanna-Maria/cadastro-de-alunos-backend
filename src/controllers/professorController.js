const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getProfessores = async (req, res) => {
  const professores = await prisma.professor.findMany();
  res.json(professores);
};

exports.createProfessor = async (req, res) => {
  const { nome, email, idade } = req.body;
  try {
    const professor = await prisma.professor.create({
      data: { nome, email, idade: parseInt(idade) },
    });
    res.status(201).json(professor);
  } catch (err) {
    res
      .status(400)
      .json({ error: 'Erro ao cadastrar professor. Verifique os dados.' });
  }
};

exports.updateProfessor = async (req, res) => {
  const { id } = req.params;
  const { nome, email, idade } = req.body;
  try {
    const professor = await prisma.professor.update({
      where: { id: parseInt(id) },
      data: { nome, email, idade: parseInt(idade) },
    });
    res.json(professor);
  } catch (err) {
    res.status(404).json({ error: 'Professor não encontrado.' });
  }
};

exports.deleteProfessor = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.professor.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Professor excluído com sucesso.' });
  } catch (err) {
    res.status(404).json({ error: 'Professor não encontrado.' });
  }
};
