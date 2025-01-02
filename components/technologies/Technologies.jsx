import classes from "./Technologies.module.scss";

const Technologies = () => {
  return (
    <div>
      <h2 className={classes.subtitle}>Technologias 🎯</h2>
      <section className={classes.technologies}>

        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-html5-plain`} />
          <p className={classes.technologies__text}>HTML5</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-css3-plain`} />
          <p className={classes.technologies__text}>CSS3</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-javascript-plain`} />
          <p className={classes.technologies__text}>JavaScript</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-vuejs-plain`} />
          <p className={classes.technologies__text}>Vue</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-nuxtjs-plain`}></i>
          <p className={classes.technologies__text}>Nuxt</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-react-original`} />
          <p className={classes.technologies__text}>React</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-sass-original`} />
          <p className={classes.technologies__text}>Sass</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-bootstrap-plain`} />
          <p className={classes.technologies__text}>Bootstrap</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-vuetify-line`} />
          <p className={classes.technologies__text}>Vuetify</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-git-plain`} />
          <p className={classes.technologies__text}>Git</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-github-original`} />
          <p className={classes.technologies__text}>GitHub</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-netlify-plain`} />
          <p className={classes.technologies__text}>Netlify</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-amazonwebservices-plain-wordmark`} />
          <p className={classes.technologies__text}>AWS</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-docker-plain`} />
          <p className={classes.technologies__text}>Docker</p>
        </div>
        <div className={classes.technologies__item}>
          <i className={`${classes.technologies__icon} devicon-portainer-original`} />
          <p className={classes.technologies__text}>Portainer</p>
        </div>
      </section>
    </div>

  );
};

export default Technologies;
