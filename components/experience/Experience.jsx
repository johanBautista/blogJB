import classes from "./Experience.module.scss";
import { useState } from 'react';

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState('education');

  const educationData = [
    {
      name: 'Grado en Multimedia',
      academy: 'UOC',
      year: 'En curso',
      description: 'Grado interdisciplinar, competencias en diseño, programación y medios multimedia.',
    },
    {
      name: 'Bootcamp Desarrollo web',
      academy: 'Ironhack',
      year: '2019',
      description: 'Formación intensiva para adquirir habilidades técnicas en desarrollo web.',
    },
    {
      name: 'CFGS Sonido',
      academy: 'IES La Mercé',
      year: '2013',
      description: 'Especialización en tratamiento y producción de audio para medios audiovisuales.',
    },
    {
      name: 'CFGS Audiovisual y espectáculos',
      academy: 'IES Sta. Eulalia',
      year: '2010',
      description: 'Formación técnica en desarrollo y producción de contenidos audiovisuales.',
    },
  ];

  const experienceData = [
    {
      company: 'Indicator',
      role: 'Front-end Developer',
      city: '',
      date: 'Jun 2023 - Actualmente',
      summary: 'Creación de componentes para la construcción de páginas web por medio de un backoffice.',
    },
    {
      company: 'Sirion Developers',
      role: 'Front-end Developer',
      city: '',
      date: 'Mar 2021 - Mar 2023',
      summary:
        'Participación en proyectos en sectores inmobiliario, transporte y hostelería. Maquetación píxel perfect y desarrollo agile.',
    },
  ];

  const data = selectedTab === 'education' ? educationData : experienceData;

  return (
    <section>
      {/* <h2 className={classes.subtitle}>Experiencia</h2>
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
      </div>*/}

      <div className={classes['experience-section']}>
        <div className={classes['experience-section__switch']}>
          <button
            className={`${classes['experience-section__tab']} ${selectedTab === 'education' ? classes['experience-section__tab--active'] : ''
              }`}
            onClick={() => setSelectedTab('education')}
          >
            Educación
          </button>
          <button
            className={`${classes['experience-section__tab']} ${selectedTab === 'experience' ? classes['experience-section__tab--active'] : ''
              }`}
            onClick={() => setSelectedTab('experience')}
          >
            Experiencia
          </button>
        </div>

        <div className={classes['experience-section__timeline']}>
          {data.map((item, index) => (
            <div
              className={`${classes['experience-section__item']} ${index % 2 === 0 ? classes['experience-section__item--left'] : classes['experience-section__item--right']
                }`}
              key={index}
            >
              <div className={classes['experience-section__dot']} />
              <div className={classes['experience-section__content']}>
                {selectedTab === 'education' ? (
                  <>
                    <h3 className={classes['experience-section__title']}>{item.name}</h3>
                    <p className={classes['experience-section__subtitle']}>{item.academy}</p>
                    <p className={classes['experience-section__year']}>{item.year}</p>
                    <p className={classes['experience-section__description']}>{item.description}</p>
                  </>
                ) : (
                  <>
                    <h3 className={classes['experience-section__title']}>{item.company}</h3>
                    <p className={classes['experience-section__subtitle']}>{item.role}</p>
                    <p className={classes['experience-section__year']}>{item.date}</p>
                    <p className={classes['experience-section__description']}>{item.summary}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Experience;