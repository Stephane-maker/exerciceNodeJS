//importation express avec require 
const express = require("express");
//constante application
const app = express();

//intercepter les requete post
app.use(express.json());

//importation de mongoose
const mongoose = require("mongoose");
//importation router 
const stuffRoutes = require('./routes/stuff');

mongoose.connect("mongodb+srv://admin:rNQackrugLjztUfC@cluster0.v51i2.mongodb.net/cluster0?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


//middleware general pour les requete 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//toute les routes sont suviti par stuffRoutes
app.use('/api/stuff', stuffRoutes);

//exportation d'application pour y accede depuis les autres fichier est sur le serveur node 
module.exports = app;