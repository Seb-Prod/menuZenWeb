//require('dotenv').config();
require('dotenv').config({ quiet: true });
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

// Middleware
//app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration de la connexion MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connexion à la base de données
db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('✅ Connexion à la base de données MySQL établie avec succès.');
});

// Route d'exemple
app.get('/', (req, res) => {
    res.send('API Express.js fonctionnelle !');
});

// Exemple de route pour récupérer des données de la DB
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des utilisateurs :', err);
            res.status(500).send('Erreur serveur');
            return;
        }
        res.json(results);
    });
});


// Démarrage du serveur
app.listen(port, () => {
    console.log(`🚀 Serveur backend démarré sur http://localhost:${port}`);
    console.log('API disponible.');
});