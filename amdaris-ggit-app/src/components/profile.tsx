import React from "react";
import "../App.css";
import { Box, Button, Link } from "@mui/material";
import { getLoggedInUser, logoutUser, User } from "../services/auth-service";

export function Profile() {
  const user: User = getLoggedInUser()!;
  return (
    <>
      <>
        <>
          <>
            <p>Profile Page</p>
          </>
        </>

        <Box>
          <p>First name: {user.firstName}</p>

          <p>Last name: {user.lastName}</p>

          <p>Email: {user.email}</p>

          <p>Gender: {user.gender}</p>
        </Box>
      </>
      <Link href="/">
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
