import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Authenticated(props) {
    const navigate = useNavigate();
  
    function logout() {
      fetch(`/api/auth/logout`, {
        method: 'delete',
      })
        .catch(() => {
          // Logout failed. Assuming offline
        })
        .finally(() => {
          localStorage.removeItem('userName');
          props.onLogout();
        });

    }
  
    return (
    <div id="authenticatedDialouge" className="px-5 pb-4">
        <p id="username" className="pb-1 lead">name</p>
        <button className="btn btn-sm btn-outline-primary" onClick="logout()">Logout</button>
        <button className="btn btn-sm btn-outline-primary" onClick="recipeBook()">Recipe Book</button>
    </div>
    );
  }