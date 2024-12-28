import classes from "./Experience.module.scss";
const Experience = () => {
  return (
    <section>
      <div className={classes.contain}>
        <h2 className={classes.subtitle}>Experiencia</h2>
        <h4 className={`${classes.workExperience} ${classes.urlLink}`}>Sirion Developers</h4>
        <p className={classes.position}>
          Front-end Developer Jr.
          <span className={classes.date}> (marzo de 2021 - Actualidad)</span>
        </p>
        <ul className={classes.listWorks}>
          <li>
            Trabajé con el equipo en el diseño, desarrollo e implementación de aplicaciones web para diferentes clientes
            de la empresa.
          </li>
          <li>
            Desarrollo de aplicación web según el mockup en adobe XD, login con api redes sociales y diseño responsive .
          </li>
          <li>
            Software para la gestión de las cuentas bancarias y mensajería de los usuarios, adaptación de una plantilla
            e integración con el api.
          </li>
          <li>Estimación de las issues, metodologías agile, integraciónes con el api, detectar y solucionar bugs.</li>
          <li>Maquetación de componentes y desarrollo responsive para soporte mobile, tablet y desktop.</li>
          <li>Stack tecnológico: React, Vue, Next, Bootstrap, Mui</li>
        </ul>
      </div>
    </section>
  )
}
export default Experience;