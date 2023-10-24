import React from 'react';
import './App.css';
import { NavBar } from './navBar';
import About from './components/about';
import Books from './components/books';
import Profile from './components/profile';
import Movies from './components/movies';
import SingIn from './components/sign-in';
import LogOut from './components/log-out';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          About Page
        </p>
      </header>
    </div>
  );
}

export default App;
