// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Appel au backend pour le message
    fetch(`${API_URL}/`)
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error('Erreur lors de la récupération du message :', err));

    // Appel au backend pour les utilisateurs
    fetch(`${API_URL}/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Erreur lors de la récupération des utilisateurs :', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mon Projet MERN Stack</h1>
        <p>Message du backend : {message}</p>

        <h2>Utilisateurs de la base de données :</h2>
        {users.length > 0 ? (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name} - {user.email}</li> 
            ))}
          </ul>
        ) : (
          <p>Aucun utilisateur trouvé ou chargement...</p>
        )}
      </header>
    </div>
  );
}

export default App;
