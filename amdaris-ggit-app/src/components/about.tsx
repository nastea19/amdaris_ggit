import React from "react";
import "../App.css";
import { Button, Divider, Link } from "@mui/material";
import "../styles/about-page.css";
import { isLoggedIn } from "../services/auth-service";

export function About() {
  return (
    <div className="about-style">
      <>
        <>
          <>
            <Divider />

            <p className="welcome-style">Welcome to our page !!!</p>
          </>

          <p className="about-info">
            Our site helps you keep track of{" "}
            <span className="bold-text">all your Books and Movies</span>.
          </p>
        </>

        <div className="why-text">
          <Divider />

          <p className="about-info">Why should you choose our app ?</p>

          <p>1. It saves you A LOT of time</p>

          <p>2. Keeps track of all your favourite things</p>

          <p>3. Helps from forgetting where you have stopped</p>
        </div>

        <Divider />
        {!isLoggedIn() ? (
          <>
            <p className="regular-text">Create a new account</p>

            <Link href="/sign-up">
              <Button variant="contained">Sign Up</Button>
            </Link>

            <p className="small-text">
              {" "}
              If you already have an account, <a href="/sign-in">Sign In</a>
            </p>
          </>
        ) : (
          <></>
        )}

        <Divider />
      </>
      {isLoggedIn() ? (
        <div className="why-text">
          <p className="about-info">What would you like to organise ?</p>

          <a className="choose-books" href="/books">
            Books
          </a>

          <a className="choose-movies" href="/movies">
            Movies
          </a>
        </div>
      ) : (
        <></>
      )}

      <Divider />

      <p className="small-text">More features coming soon...</p>
    </div>
  );
}

export default About;
