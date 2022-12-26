import Image from 'next/image';
import profileImage from '../../images/johan_img.jpg';
import classes from './HeroSection.module.scss';

function HeroSection() {
  return (
    <div className={classes.heroSection}>
      <dir className={classes.profileImg}>
        <Image src={profileImage} alt="Shaif arfan" height="200" width="200" />
      </dir>
      <h1 className={classes.name}>db_DEV</h1>
      <p className={classes.description}>
        En busca de la Felicidad
      </p>
    </div>
  );
}

export default HeroSection;