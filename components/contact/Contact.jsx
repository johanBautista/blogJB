import React from "react";
import classes from "./Contact.module.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <main className={classes.container}>
      <h1>Contacto</h1>
      <div className={classes.contain}>
        <p>
          Para consultas relacionadas con ofertas de empleo, por favor envieme un correo electrónico a
          <span className={classes.urlLink}> jsbparra@gmail.com</span>
        </p>
        <p>O</p>
        <p>Enviame un mensaje a alguna de mis redes sociales</p>
        <div className={classes.networks}>
          <a
            href="https://www.linkedin.com/in/johanbautista/"
            target="_blank"
            rel="noreferrer"
            className={classes.urlLink}
          >
            <FontAwesomeIcon icon={faLinkedin} className={classes.networkItem} />
          </a>
          <a href="https://github.com/johanBautista" target="_blank" rel="noreferrer" className={classes.urlLink}>
            <FontAwesomeIcon icon={faGithub} className={classes.networkItem} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
