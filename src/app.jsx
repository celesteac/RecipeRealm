import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
  
<div className="body ">
  <header >
      <nav className="navbar navbar-expand-sm text-bg-info border-bottom border-secondary border-5">
          <span style={{fontSize: "30px"}} className="navbar-brand ms-4">Recipe Realm</span>
          <div className="container-fluid">
              <ul className="navbar-nav">
                  <li className="nav-item"><a className="nav-link active" href="index.html">Login</a></li>
                  <li className="nav-item" id="authenticatedItem1" style={{display: "none"}}><a className="nav-link" href="recipebook.html">Recipe Book</a></li>
                  <li className="nav-item" id="authenticatedItem2" style={{display: "none"}}><a className="nav-link" href="addrecipe.html">Add a Recipe</a></li>
              </ul>
          </div>
          <div className="pe-5">
              <strong>User:</strong>
              <span id="userdisplay"></span>
          </div>
      </nav>
  </header>

  <main className="container-fluid text-center" id="main">
    <p>App here</p>

  </main>

  <footer className="bg-info">
      <p>Celeste Chamberlin <a href="https://github.com/celesteac/Startup">Github repository</a></p>
  </footer> 
  
</div>
);
}