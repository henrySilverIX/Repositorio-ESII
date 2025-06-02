const express = require('express');
const router = express.Router();
const Projeto = require('../models/Projeto');

// Página para listar todos os projetos
router.get('/', async (req, res) => {
  const projetos = await Projeto.find().sort({ criadoEm: -1 });
  res.render('projetos/listar', { title: 'Meus Projetos', projetos });
});

// Formulário de novo projeto
router.get('/novo', (req, res) => {
  res.render('projetos/novo', { title: 'Novo Projeto' });
});


// Criar um novo projeto
router.post('/novo', async (req, res) => {
  const { titulo, descricao, link } = req.body;
  await Projeto.create({ titulo, descricao, link });
  res.redirect('/projetos');
});

// Deletar projeto
router.post('/:id/deletar', async (req, res) => {
  await Projeto.findByIdAndDelete(req.params.id);
  res.redirect('/projetos');
});

module.exports = router;