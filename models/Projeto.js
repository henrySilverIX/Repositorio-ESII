const mongoose = require('mongoose');

const ProjetoSchema = new mongoose.Schema({
    titulo:String,
    descricao:String,
    link:String,
    criadoEm:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Projeto', ProjetoSchema);