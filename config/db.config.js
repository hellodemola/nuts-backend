require('dotenv').config()

const mongoose = require('mongoose');

const {PRODUCTIONDB} = process.env;

const db = mongoose.connect(PRODUCTIONDB, {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    console.log(err)
})

module.exports = db;