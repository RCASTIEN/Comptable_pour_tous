import React, { Component, Fragment } from "react";
//CSS
import "../asset/css/footer.css";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer>
          <p>
            Mentions légales - Conditions générales - <a href="#">Contact</a>
          </p>

          <div id="footer">
            <img
              className="logo"
              src={require("../asset/img/OEC.png")}
              alt="expert"
              id="expert"
            />
            <p>
              commendari posse per statuas aestimantes eas ardenter adfectant
              quasi plus praemii de figmentis aereis sensu carentibus adepturi,
              quam ex conscientia honeste recteque factorum, easque auro curant
              inbracteari,
            </p>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
