import classes from "./About.module.scss";

const About = () => {
  return (
    <main>
      <div className={classes.contain}>
        <h2 className={classes.subtitle}>Acerca de 👨🏻‍💻</h2>
        <p className={classes.parrafo}>
          Con más de 3 años de experiencia creando interfaces web modernas y optimizadas para el usuario, soy apasionado por el <b className={classes.textBold}>diseño web</b> y el desarrollo de soluciones digitales, me especializo en <b className={classes.textBold}>Vue</b>, <b className={classes.textBold}>JavaScript</b>, <b className={classes.textBold}>HTML</b>, y <b className={classes.textBold}>CSS</b>, también tengo experiencia en otros frameworks de Frontend como React y Nextjs. Mi enfoque está en diseñar productos que optimicen el rendimiento del usuario y generen impacto en el negocio.
        </p>
        <p className={classes.parrafo}>
          Destaco por mi capacidad para trabajar en <b className={classes.textBold}>entornos colaborativos</b> y ágiles, así como por mi compromiso con el aprendizaje continuo y la adaptación a tecnologías emergentes. Valoro la oportunidad de transformar ideas en experiencias digitales que cumplan con las necesidades del cliente.
        </p>
      </div>
      <div className={classes.containerStack}>
        <p>
          Puedes descargar mi currículum <a className={classes.urlLink}>aquí</a>
        </p>
      </div>
    </main>
  );
};

export default About;
