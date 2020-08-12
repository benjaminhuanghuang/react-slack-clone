import React from "react";
import {Button} from "@material-ui/core";

import {auth, provider} from "./firebase"


import "./Login.css";

function Login() {
  const login = () =>{
    auth.signInWithPopup(provider).then((result)=>{
      console.log(result);
    })
    .catch((error)=>{
      alert(error.message);
    });
  }
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
