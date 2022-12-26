import Image from "next/image";
import back from "../../images/back.webp";
import classes from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <div className={classes.container}>
      <Image
        className={classes.landingImage}
        src={back}
        alt="Picture of autor"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className={classes.infoContainer}>
        <h1 className={classes.landingText}>
          Johan developer, certificate Fullstack
        </h1>
        <div className={classes.containerButton}>
          <button className={classes.buttonCall}>Contact</button>
        </div>
        <div className={classes.containerIcons}>
            
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
