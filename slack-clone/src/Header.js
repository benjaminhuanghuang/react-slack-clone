import React from "react";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from  "@material-ui/icons/AccessTime"
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="Sonny SSS" src='' />
        <AccessTimeIcon/>
      </div>
      <div className="header__search"></div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
