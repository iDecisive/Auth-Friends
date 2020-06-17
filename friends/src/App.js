import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './components/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <Route path='/'>

        <h1>Not logged in.</h1>

        <Login />

      </Route>


    </div>
    </BrowserRouter>
  );
}

export default App;
