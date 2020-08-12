import React from "react";
import {Button} from "@material-ui/core";


import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://seeklogo.com/images/S/slack-logo-DE4445077C-seeklogo.com.png" alt=""/>
        <h1>Sign in to Clever Programmer HQ</h1>
        <p>cleverprogrammer.slack.com</p>
        <Button>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
