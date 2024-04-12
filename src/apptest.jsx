import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { AddRecipe } from './addrecipe/addrecipe';
import { RecipeBook } from './recipebook/recipebook';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (

<BrowserRouter>
<div className="body ">
  <header >
      <nav className="navbar navbar-expand-sm text-bg-info border-bottom border-secondary border-5">
          <span style={{fontSize: "30px"}} className="navbar-brand ms-4">Recipe Realm</span>
          <div className="container-fluid">
              <ul className="navbar-nav">
                  <li className="nav-item"><NavLink className="nav-link active" to="">Login TEst</NavLink></li>
                  <li className="nav-item" id="authenticatedItem1" ><NavLink className="nav-link" to="/recipebook">Recipe Book</NavLink></li>
                  <li className="nav-item" id="authenticatedItem2" ><NavLink className="nav-link" to="/addrecipe">Add a Recipe</NavLink></li>
              </ul>
          </div>
          <div className="pe-5">
              <strong>User:</strong>
              <span id="userdisplay"></span>
          </div>
      </nav>
  </header>

<Routes>
  <Route path='/' element={<Login/>} exact />
  <Route path='/recipebook' element={<RecipeBook/>}  />
  <Route path='/addrecipe' element={<AddRecipe/>}  />
  <Route path='*' element={<NotFound />} />
</Routes>

  <footer className="bg-info">
      <p>Celeste Chamberlin <a href="https://github.com/celesteac/Startup">Github repository</a></p>
  </footer> 
  
</div>
</BrowserRouter>
);
}

function NotFound() {
  return <main className='container-fluid text-center'>404: Return to sender. Address unknown.</main>;
}