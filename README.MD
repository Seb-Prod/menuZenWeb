# Mon Projet Fullstack React-Express-MySQL

Bienvenue dans ce projet fullstack qui combine un frontend React, un backend Express.js et une base de données MySQL.

---

## Table des matières

- [Technologies Utilisées](#technologies-utilisées)
- [Structure du Projet](#structure-du-projet)
- [Prérequis](#prérequis)
- [Installation et Démarrage](#installation-et-démarrage)
- [Configuration de la Base de Données](#configuration-de-la-base-de-données)
- [API Endpoints](#api-endpoints)

---

## Technologies Utilisées

* **Frontend :**
    * React.js
    * Yarn (gestionnaire de paquets)
* **Backend :**
    * Node.js
    * Express.js (framework web)
    * MySQL (client de base de données)
    * Nodemon (pour le rechargement automatique en développement)
    * dotenv (pour la gestion des variables d'environnement)
    * cors (pour la gestion des requêtes cross-origin)
    * body-parser (pour l'analyse des corps de requêtes)
    * concurrently (pour lancer backend et frontend simultanément)

---

## Structure du Projet

mon-projet/
├── backend/                  # Dossier pour l'application Express.js
│   ├── node_modules/         # Dépendances du backend (ignoré par Git)
│   ├── .env                  # Variables d'environnement du backend (ignoré par Git)
│   ├── package.json
│   ├── server.js             # Point d'entrée du serveur Express
│   └── ...
├── frontend/                 # Dossier pour l'application React
│   ├── node_modules/         # Dépendances du frontend (ignoré par Git)
│   ├── public/
│   ├── src/
│   ├── .env                  # Variables d'environnement du frontend (ignoré par Git)
│   ├── package.json
│   └── ...
├── .gitignore                # Fichier pour ignorer les fichiers/dossiers non pertinents pour Git
├── package.json              # Fichier de configuration pour les scripts root (concurrently)
└── README.md                 # Ce fichier !

---

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

* Node.js (version 16 ou supérieure recommandée)
* Yarn (gestionnaire de paquets)
* Un serveur MySQL fonctionnel

---

## Installation et Démarrage

Suivez ces étapes pour configurer et démarrer le projet :

1.  **Clonez le dépôt (si depuis Git) ou créez le dossier :**
    ```bash
    git clone <URL_DE_VOTRE_DEPOT>
    cd mon-projet
    ```
    Ou si vous continuez votre projet local actuel :
    ```bash
    cd mon-projet
    ```

2.  **Installer les dépendances du Backend :**
    ```bash
    cd backend
    yarn install
    cd ..
    ```

3.  **Installer les dépendances du Frontend :**
    ```bash
    cd frontend
    yarn install
    cd ..
    ```

4.  **Configurer les variables d'environnement :**
    * Créez un fichier `.env` dans le dossier `backend/` et remplissez-le avec vos informations MySQL et le port du serveur :
        ```ini
        # backend/.env
        PORT=8000
        DB_HOST=localhost
        DB_USER=root
        DB_PASSWORD=votre_mot_de_passe_mysql
        DB_NAME=votre_nom_de_base_de_donnees
        ```
    * Créez un fichier `.env` dans le dossier `frontend/` pour l'URL de l'API :
        ```ini
        # frontend/.env
        REACT_APP_API_URL=http://localhost:8000
        ```
    **N'oubliez pas de remplacer `votre_mot_de_passe_mysql` et `votre_nom_de_base_de_donnees` par vos propres valeurs.**

5.  **Démarrer le projet :**
    Assurez-vous que votre serveur MySQL est en cours d'exécution.
    Depuis la racine du projet (`mon-projet/`), lancez les deux serveurs :
    ```bash
    yarn start-dev
    ```
    Le backend démarrera sur `http://localhost:8000` (avec Nodemon pour le rechargement automatique) et le frontend sur `http://localhost:3000`.

---

## Configuration de la Base de Données

Assurez-vous d'avoir une base de données MySQL en cours d'exécution. Vous pouvez créer votre base de données et une table `users` pour les exemples :

```sql
CREATE DATABASE votre_nom_de_base_de_donnees;
USE votre_nom_de_base_de_donnees;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');
INSERT INTO users (name, email) VALUES ('Jane Smith', 'jane.smith@example.com');