import React from 'react';
import { NavLink, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from './components/about';
import Books from './components/books';
import Profile from './components/profile';
import Movies from './components/movies';
import SingIn from './components/sign-in';
import LogOut from './components/log-out';

import { navLinks, NavLinkProps } from "./components/links/navbar-routing";

const NavigationBar: React.FC = () => {
  return (
    <nav>
      <ul>{navLinks.map((props) => getComponent(props))}</ul>
    </nav>
  );
};

function getComponent(props: NavLinkProps) {
  const { path, title } = props;
  return (
    <li>
      <Link to={path}>{title}</Link>
    </li>
  );
}

export default NavigationBar;