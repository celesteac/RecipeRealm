import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Authenticated({username, onLogout}) {
    const navigate = useNavigate();
  
    function logout() {
      fetch(`/api/auth/logout`, {
        method: 'delete',
      })
        .catch(() => {
          // Logout failed. Assuming offline
        })
        .finally(() => {
          localStorage.removeItem('username');
          onLogout();
        });

    }
  
    return (
    <div id="authenticatedDialouge" className="px-5 pb-4">
        <p id="username" className="pb-1 lead">{username}</p>
        <button className="btn btn-sm btn-outline-primary" onClick={() => logout()}>Logout</button>
        <button className="btn btn-sm btn-outline-primary" onClick={() => navigate('/recipebook')}>Recipe Book</button>
    </div>
    );
  }