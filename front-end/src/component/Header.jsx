import React, { Component, Fragment } from "react";
//CSS
import "../asset/css/header.css";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <img
            className="logo"
            src={require("../asset/img/header.png")}
            alt="Logo"
          />
        </header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Missions</a>
            </li>
            <li>
              <a href="#">Le cabinet</a>
            </li>
            <li>
              <a href="#">Partenaires</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Header;
