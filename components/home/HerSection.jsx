import Image from 'next/image';
import profileImage from '../../images/johan_img.jpg';

import classes from './HeroSection.module.scss';

function HeroSection() {
  return (
    <div className={classes.heroSection}>
      {/* <img src={profileImage} alt="Shaif arfan" /> 
      <dir className={classes.profileImg}>
        <Image src={profileImage} alt="Shaif arfan" height="200" width="200" />
      </dir>
      <h1 className={classes.name}>db_DEV</h1>
      <p className={classes.description}>
        En busca de la Felicidad
      </p>
        */}
      <h1 className={classes.heroTitle}>Hola! <br /> Soy <span className={classes.heroName}>Johan Bautista</span>
        , Frontend Developer especializado en crear interfaces web modernas, funcionales y optimizadas para el usuario.
      </h1>
    </div>
  );
}

export default HeroSection;