var mongoose = require('mongoose');

const usuariosCollection='usuarios'
const usuariosSchema = new mongoose.Schema({

    username:{type:String,require:true},
    password:{type:String,require:true}

})

module.exports = mongoose.model(usuariosCollection,usuariosSchema)