import React, { useState, useEffect } from 'react';
import './App.css';
import { User } from './types/user';
import { useDeviceType } from './hooks/useDeviceType';

function App() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  
  const API_URL = process.env.REACT_APP_API_URL;

  const deviceType = useDeviceType();

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
  }, [API_URL]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Votre application React</h1>
        <p>L'application tourne actuellement sur un appareil : <strong>{deviceType}</strong></p>

        {deviceType === 'mobile' && (
          <p>Contenu optimisé pour mobile.</p>
        )}

        {deviceType === 'tablet' && (
          <p>Contenu optimisé pour tablette.</p>
        )}

        {deviceType === 'desktop' && (
          <p>Contenu optimisé pour ordinateur de bureau.</p>
        )}
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
