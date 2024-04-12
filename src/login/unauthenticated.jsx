import React from 'react';

// import Button from 'react-bootstrap/Button';
// import {MessageDialog} from './messageDialog';

export function Unauthenticated({userNameProps, onLogin}) {
  const [username, setUsername] = React.useState(userNameProps);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    console.log("entered1");
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    console.log("entered2");
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({username: username, password: password}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
        console.log("entered3.1");
        localStorage.setItem('user', username);
        onLogin(username);
    } else {
        console.log("entered3.2");
        const body = await response.json();
        setDisplayError(`Error: ${body.msg}`);
    }
  }

  return (
    <div className="px-5 pb-4 pt-2" id="loginDialouge">
        <div className="input-group">
            <span className="input-group-text">Name</span>
            <input 
                id="name" 
                className="form-control" 
                type="text" 
                // value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username" 
            />
        </div>

        <div className="input-group py-3">
            <span className="input-group-text">Password</span>
            <input 
                id="password" 
                className="form-control" 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
            />
        </div>

            <button className="btn btn-sm btn-outline-primary" onClick={() => loginUser()}>Login</button>
            <button className="btn btn-sm btn-outline-primary" onClick={() => createUser()}>Create</button>
    </div>
  );
}
