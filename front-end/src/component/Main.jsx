import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
//CSS
import "../asset/css/main.css";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <div id="sousmenu">
          <div id="Smenu">
            <a href="#">Actu</a>
          </div>
          <div id="Smenu">
            <a id="" href="#">
              Guide
            </a>
          </div>
          <div id="Smenu">
            <a id="" href="#">
              Agenda
            </a>
          </div>
          <div id="Smenu">
            <a id="" href="#">
              Outils
            </a>
          </div>
          <div id="Smenu">
            <a id="" href="#">
              Taux
            </a>
          </div>
        </div>
        <div id="Ensemble">
          <section>
            <p>
              un cabinet d'expertise comptable tourné vers ses clients. De la
              création de votre entreprise à sa transmission, nos équipes
              composées d'experts comptables, commissaires aux comptes,
              comptables et conseillers auprès des dirigeants sont à votre
              écoute pour vous aider à finaliser et réaliser vos projets.
            </p>
          </section>

          <article>
            <p>
              Le Cabinet "" est une société d'expertise-comptable implantée dans
              le département du Nord. Elle est dirigée par Monsieur xxx xxxx,
              Expert-Comptable et Commissaire aux Comptes, entouré d'équipes
              pluridisciplinaires de professionnels offrant une gamme de
              prestations complète pour vous aider dans la vie de votre
              entreprise. Nous intervenons dans des secteurs d'activité variés
              et larges : commerce, immobilier, BTP, industrie, professions
              libérales, associations... et pour tout type de forme et de taille
              d'entreprise : entreprise individuelle (artisan, commerçant),
              SARL, SA, SAS, GIE, SCI, Holding... Nous sommes les techniciens et
              les garants d'une information comptable et financière exhaustive
              qui vous permet de posséder toutes les clés d'une décision
              opportune et réfléchie.
            </p>
          </article>
        </div>
      </Fragment>
    );
  }
}

export default Main;
