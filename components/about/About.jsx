import classes from "./About.module.scss";

const About = () => {
  const techs = [
    {
      name: "Javascript",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
      name: "HTML5",
      url: "https://developer.mozilla.org/es/docs/Glossary/HTML5",
    },
    {
      name: "CSS3",
      url: "https://developer.mozilla.org/es/docs/Web/CSS",
    },
    {
      name: "Git",
      url: "https://git-scm.com/",
    },
    {
      name: "React",
      url: "https://beta.es.reactjs.org/",
    },
    {
      name: "Vue",
      url: "https://vuejs.org/",
    },
    {
      name: "NodeJs",
      url: "https://nodejs.org/en/",
    },
    {
      name: "Express",
      url: "https://expressjs.com/es/",
    },
    {
      name: "NextJs",
      url: "https://nextjs.org/",
    },
    {
      name: "Adobe XD",
      url: "https://www.adobe.com/",
    },
    {
      name: "Figma",
      url: "https://www.figma.com/",
    },
    {
      name: "Jira",
      url: "https://www.atlassian.com/es/software/jira",
    },
    {
      name: "Bootstrap",
      url: "https://getbootstrap.com/",
    },
    {
      name: "Mui",
      url: "https://mui.com/",
    },
    {
      name: "Javascript",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
    {
      name: "Javascript",
      url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    },
  ];
  return (
    <main className={classes.container}>
      <h1>Acerca de mi</h1>
      <div className={classes.contain}>
        <h2 className={classes.subtitle}>Hola,</h2>
        <p className={classes.parrafo}>
          Mi nombre es Johan, soy un desarrollador frontend con 2 años de experiencia, actualmente estoy trabajando en
          <a href="https://www.siriondev.com/ca" target="_blank" className={classes.urlLink} rel="noreferrer">
            {" "}
            Sirion Developers
          </a>
          . Soy un entusiasta del desarrollo web, aficionado en aprender nuevas tecnologías y herramientas. Me apasiona
          diseñar y crear productos para la web.
        </p>
        <br></br>
        <p className={classes.parrafo}>
          Lo que más me gusta del desarrollo es la oportunidad de ofrecer soluciones adaptadas a las necesidades del
          cliente, me gusta maquetar diseños que sean atractivos y optimicen el performance de los usuarios, entre mis
          capacidades técnicas también cuento con experiencia en guión, producción y postproducción de productos
          audiovisuales. Creo en aprender y{" "}
          <a
            href="https://www.youtube.com/watch?v=i07qz_6Mk7g"
            target="_blank"
            className={classes.urlLink}
            rel="noreferrer"
          >
            crecer cada día
          </a>
          .
        </p>
      </div>
      <div className={classes.containerStack}>
        <h2 className={classes.subtitle}>Habilidades Técnicas</h2>
        <ul className={classes.stack}>
          {techs?.map((tech) => (
            <a key={tech.name} className={classes.buttonStack} href={tech.url} target="_blank" rel="noreferrer">
              {tech.name}
            </a>
          ))}
        </ul>
        <br></br>
        <p>
          Puedes descargar mi currículum <a className={classes.urlLink}>aquí</a>
        </p>
      </div>

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
    </main>
  );
};

export default About;
