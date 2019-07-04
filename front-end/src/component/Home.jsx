import React, { Component, Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import { BrowserRouter, Route, Link } from "react-router-dom";
//CSS
import "../asset/css/home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <html>
          <Header />
          <Main />
          <Footer />
        </html>
      </Fragment>
    );
  }
}

export default Home;
