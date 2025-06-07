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
  let { titulo, descricao, imagemUrl, link, tecnologias, ferramentas } = req.body;

  if (tecnologias) {
    tecnologias = tecnologias.split(',').map(tech => tech.trim());
  }

  if (ferramentas) {
    ferramentas = ferramentas.split(',').map(tech => tech.trim());
  }

  try{
  await Projeto.create({ 
    titulo,
    descricao,
    imagemUrl,
    link,
    tecnologias,
    ferramentas
  });

  res.redirect('/projetos');
  }catch(error){
    console.error(error);
    res.send("Erro ao salvar o projeto");
  }
});

// Deletar projeto
router.post('/:id/deletar', async (req, res) => {
  await Projeto.findByIdAndDelete(req.params.id);
  res.redirect('/projetos');
});

module.exports = router;