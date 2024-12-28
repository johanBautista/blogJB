import Image from 'next/image';
import heroImage from '../../images/hero.webp';

import classes from './HeroSection.module.scss';

function HeroSection() {
  return (
    <div className={classes['hero-section']}>
      <div className={classes['hero-section__content']}>
        <h1 className={classes['hero-section__title']}>
          Hola! <br /> Soy <span className={classes['hero-section__name']}>Johan Bautista</span>, Frontend Developer especializado en crear interfaces web modernas y funcionales.
        </h1>
      </div>
      <div className={classes['hero-section__image']}>
        <Image src={heroImage} alt="Johan Bautista" height="300" width="300" className={classes['hero-section__profile-img']} />
      </div>
    </div>
  );
}

export default HeroSection;
