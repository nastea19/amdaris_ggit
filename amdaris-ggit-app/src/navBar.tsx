import React from 'react';
import { NavLink } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Books from './components/books';
import Profile from './components/profile';
import Movies from './components/movies';
import SingIn from './components/sign-in';
import LogOut from './components/log-out';

export function NavBar() {
  return (
    <nav >
      <NavLink to="./components/about">
        About
      </NavLink>

      <NavLink to="/components/Books">
        Books
      </NavLink>

      <NavLink to="./components/profile">
        Profile
      </NavLink>

      <NavLink to="./components/movies">
        Movies
      </NavLink>

      <NavLink to="./components/sign-in">
        Sing-In
      </NavLink>

      <NavLink to="/components/log-out">
        Log-Out
      </NavLink>
    </nav>
  );
}