import React from "react";
import { Button } from "@material-ui/core";

import { auth, provider } from "./firebase";

import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

import "./Login.css";

function Login() {
  const [state, dispatch] = useStateValue();
  const [{user}] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://seeklogo.com/images/S/slack-logo-DE4445077C-seeklogo.com.png" alt="" />
        <h1>Sign in to Clever Programmer HQ</h1>
        <p>cleverprogrammer.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
