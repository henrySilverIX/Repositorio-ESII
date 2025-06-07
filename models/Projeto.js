const mongoose = require('mongoose');

const ProjetoSchema = new mongoose.Schema({
    titulo:String,
    descricao:String,
    imagemUrl: String,
    link:String,
    tecnologias: [String],
    ferramentas: [String],
    criadoEm:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Projeto', ProjetoSchema);