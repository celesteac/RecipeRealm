import React from 'react';

import Button from 'react-bootstrap/Button';
import {MessageDialog} from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({email: userName, password: password}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <div className="px-5 pb-4 pt-2" id="loginDialouge" style={{display: "none;"}}>
        <div className="input-group">
            <span className="input-group-text">Name</span>
            <input id="name" type="text" placeholder="Username" className="form-control" />
        </div>
        <div className="input-group py-3">
            <span className="input-group-text">Password</span>
            <input id="password" type="password" placeholder="Password" className="form-control" />
        </div>
            <button className="btn btn-sm btn-outline-primary" onClick="loginUser()">Login</button>
            <button className="btn btn-sm btn-outline-primary" onClick="createUser()">Create</button>
    </div>
  );
}
