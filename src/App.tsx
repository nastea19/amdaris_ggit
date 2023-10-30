import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLinkProps, navLinks } from "./components/links/navbar-routing";
import './App.css';
import NavigationBar from "./navBar";


import About from './components/about';
import Books from './components/books';
import Profile from './components/profile';
import Movies from './components/movies';
import SingIn from './components/sign-in';
import LogOut from './components/log-out';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>{navLinks.map((props) => getComponent(props))}</Routes>
      </div>
    </Router>
  );
};

function getComponent(props: NavLinkProps) {
  const { path, component, title } = props;
  return <Route path={path} Component={component} key={title} />;
}

export default App;

function AccountMenu () {
}
