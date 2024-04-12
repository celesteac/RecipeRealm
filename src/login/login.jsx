import React from 'react';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';

export function Login({username, authState, onAuthChange }) {

  return (
    <main className="container-fluid text-center" id="main">
        <div className="container col-sm-4 text-bg-light rounded pt-4">
            <h1>Welcome</h1>
            
            {authState === AuthState.Unauthenticated && (
              < Unauthenticated 
                username={username} 
                onLogin={(loginUsername)=>{ 
                onAuthChange(loginUsername, AuthState.Authenticated)
              }} />
            )}

            {authState === AuthState.Authenticated && (
              <Authenticated 
                username={username} 
                onLogout={(loginUsername)=>{ 
                onAuthChange(loginUsername, AuthState.Authenticated)
              }}/>
            )}

        </div>

    </main>
  );
}