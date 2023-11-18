import React from "react";
import "../App.css";
import { Box, Button, Link } from "@mui/material";
import { getLoggedInUser, logoutUser, User } from "../services/auth-service";
import "../styles/profile.css";

export function Profile() {
  const user: User = getLoggedInUser()!;
  return (

  <>
      <div  style ={{marginTop: "20px"}} className="card">

        <div className="profile-pic">
          <link href='https://unpkg.com/css.gg@2.0.0/icons/css/profile.css' rel='stylesheet'></link>
          <i className="gg-profile"></i>
        </div>

        <div className="profile-info" >

          <p className="user-name">{user.firstName} {user.lastName} </p>

          <p><span className="black-text">Email:</span> {user.email}</p>

          <p> <span className="black-text"> Gender: </span>{user.gender}</p>
          
        </div>

      </div>

      
    </>
  );
}

export default Profile;
