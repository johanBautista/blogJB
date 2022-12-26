import classes from "./About.module.scss";

const About = () => {
  return (
    <main className={classes.container}>
      <h2>About me</h2>
      <p className={classes.parrafo}>
        Hola! mi nombre es Johan y soy frontend developer, naci en Colombia pero
        actualmente resido en Espanya, Hace 2 anys que estoy en el mundo del
        desarrollo web tengo una especial atencion al disenyo y la accesibilidad
      </p>
      <br />
      <p className={classes.parrafo}>
        Actualmente estoy interesado en aprender el bigData y la AI, cuando
        tengo un momento libre compongo musica y leo sobre finanzas y desarrollo
      </p>
      <br />
      <p className={classes.parrafo}>
        Espero poder ayudarte con tu proyecto personal y llevarlo juntos al
        siguiente nivel, no olvides revisar mis proyectos, igual hay algo que
        podamos crear juntos
      </p>
      <br />
      <p className={classes.parrafo}>otras features de este proyecto:</p>

    
    </main>
  );
};

export default About;
