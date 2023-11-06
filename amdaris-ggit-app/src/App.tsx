import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLinkProps, navLinks } from "./components/links/navbar-routing";
import NavigationBar from "./components/NavigationBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="all">
        <NavigationBar />
        <Routes>{navLinks.map((props) => getComponent(props))}</Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

function getComponent(props: NavLinkProps) {
  const { path, component, title } = props;
  return <Route path={path} Component={component} key={title} />;
}

export default App;
