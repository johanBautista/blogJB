import About from "../components/about/About";
import CallToAction from "../components/callToAction/CallToAction";
import Contact from "../components/contact/Contact";
import HeroSection from "../components/home/HerSection";
import Technologies from "../components/technologies/Technologies";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <CallToAction />
        <HeroSection />
        <About />
        <Technologies />
        <Contact />
      </main>
    </>
  );
}
