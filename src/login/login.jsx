import React from 'react';
// import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login(props) {

  function loginUser(){
    console.log("logging in");
  }

  function createUser(){
    console.log("creating");
  }


  return (
    <main className="container-fluid text-center" id="main">
        <div className="container col-sm-4 text-bg-light rounded pt-4">
            <h1>Welcome</h1>
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
            {props.authState === Authenticated && (
              <Authenticated username={props.username} onLogout={(loginUserName)=>{ 
                props.onAuthChange(loginUserName, AuthState.Authenticated)
              }}/>
            )}
        </div>

    </main>
  );
}