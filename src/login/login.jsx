import React from 'react';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';
import { Unauthenticated } from './unauthenticated';
import {MessageDialog} from './messageDialog';


export function Login({username, authState, onAuthChange }) {
  const [displayError, setDisplayError] = React.useState(null);

  return (
    <main className="container-fluid text-center" id="main">
        <div className="container col-sm-4 text-bg-light rounded pt-4">
            <h1>Welcome</h1>
            
            {authState === AuthState.Unauthenticated && (
              < Unauthenticated 
                username={username} 
                onLogin={(loginUsername)=>{ 
                  onAuthChange(loginUsername, AuthState.Authenticated)
                }}
                onError={(message)=>{
                  setDisplayError(message);
                }} 
              />
            )}

            {authState === AuthState.Authenticated && (
              <Authenticated 
                username={username} 
                onLogout={()=>{ 
                onAuthChange("", AuthState.Unauthenticated)
              }}/>
            )}

        </div>

        {authState === AuthState.Unauthenticated && (<MessageDialog 
              message={displayError} 
              onHide={() => setDisplayError(null)} 
            />)}

    </main>
  );
}