// app.js
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');
const mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve arquivos estáticos da pasta public/
app.use(express.static(path.join(__dirname, 'public')));

// Usa as rotas definidas em routes/index.js
app.use('/', routes);

mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Conectado"))
.catch(err => console.log(err));


const projetosRoutes = require('./routes/projetos');
// para receber dados de formulários
app.use(express.urlencoded({ extended: true }));
app.use('/projetos', projetosRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});