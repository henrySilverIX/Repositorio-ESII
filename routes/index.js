// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Início' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'Sobre Mim' });
});

router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Sobre Mim' });
});

module.exports = router;