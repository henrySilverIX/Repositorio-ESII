// app.js
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve arquivos estáticos da pasta public/
app.use(express.static(path.join(__dirname, 'public')));

// Usa as rotas definidas em routes/index.js
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});