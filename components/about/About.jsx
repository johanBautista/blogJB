import classes from "./About.module.scss";

const About = () => {
  return (
    <main>
      <div className={classes.contain}>
        <h2 className={classes.subtitle}>Acerca de 👨🏻‍💻</h2>
        <p className={classes.parrafo}>
          Me gusta crear interfaces web modernas y optimizadas para los usuario, soy un apasionado del <b className={classes.textBold}>diseño web</b> y las buenas prácticas, habitualmente trabajo con <b className={classes.textBold}>Vue</b>, <b className={classes.textBold}>JavaScript</b>, <b className={classes.textBold}>HTML</b>, y <b className={classes.textBold}>CSS</b>, pero también tengo experiencia en otros frameworks de Frontend como React y Nextjs.
        </p>
        <p className={classes.parrafo}>
          En estos mas de 3 años como desarrollador me he enfocado en dar soluciones a productos que optimicen el rendimiento de la interfaz y generen impacto positivo en el negocio.</p>
        <p className={classes.parrafo}>
          Destaco mi capacidad de trabajar en <b className={classes.textBold}>entornos ágiles</b>, así como mi compromiso con el aprendizaje continuo y la adaptación a tecnologías emergentes. Valoro la oportunidad de transformar ideas en experiencias digitales que cumplan con las necesidades del cliente.
        </p>
      </div>
      <div className={classes.containerStack}>
        <p>
          Puedes descargar mi cv <a className={classes.urlLink}>aquí</a>
        </p>
      </div>
    </main>
  );
};

export default About;
