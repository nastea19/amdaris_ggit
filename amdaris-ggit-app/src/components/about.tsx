import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { Button, Divider, Link } from '@mui/material';

export function About() {
  return (
    <><><><><div className="App">
      About
    </div>

    <Divider />

    <p>
    Welcome to our page !!!
    </p></> 

    <p>
      Our site helps you keep track of all your Books and Movies/Series.
    </p></>

    <p>
        Create a new acount 
    </p>

    <Link href="/sign-up">
      <Button variant="contained">
        Sign Up
      </Button>
    </Link>

    <p>
        If you already have an account : 
    </p>

    <Link href="/sign-in">
      <Button variant="outlined">
        Sign In
      </Button>
    </Link>

    <Divider />

    <p>
      What would you like to organise ?
    </p></>

    <Link href="/books">
      <Button variant="text">Books</Button>
    </Link>

    <Link href="/movies">
      <Button variant="text">Movies</Button>
    </Link>

    <Divider />
    
    <p>
      Why should you choose us ?
    </p>

    <p>
      1. We can save you A LOT of time
    </p>

    <p>
      2. We help you keep track of all your favourite things
    </p>

    <p>
      3.
    </p>

    <p>
      4. 
    </p>





    <Divider />

    <p>
      More features coming soon...
    </p></>
  );
}

export default About;

