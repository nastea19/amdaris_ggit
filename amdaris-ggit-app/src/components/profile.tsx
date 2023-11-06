import React from "react";
import "../App.css";
import { Box, Button, Link } from "@mui/material";
import { logoutUser } from "../services/auth-service";

export function Profile() {
  return (
    <>
      <>
        <>
          <>
            <div className="App">Profile Component</div>

            <p>Profile Page</p>
          </>

          <p>User's Info from Sign-IN</p>
        </>

        <Box>
          <p>First name:</p>

          <p>Last name:</p>

          <p>Email:</p>

          <p>Gender:</p>
        </Box>
      </>
      <Link href="/log-out">
        <Button
          variant="text"
          onClick={() => {
            logoutUser();
          }}
        >
          Log Out
        </Button>
      </Link>
    </>
  );
}

export default Profile;
