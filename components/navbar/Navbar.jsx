import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(null);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        Logo
      </Link>
      {/* dark-mode */}
      <form
        style={{
          position: "absolute",
          top: "1rem",
          left: "42%",
        }}
        action="#"
      >
        <label className="switch">
          <input type="checkbox" checked={darkTheme} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
      </form>

      {/* navbar responsive */}
      <input className={classes.menuBtn} type="checkbox" id="menuBtn" />
      <label className={classes.menuIcon} htmlFor="menuBtn">
        <span className={classes.navicon}></span>
      </label>

      <ul className={classes.menu}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/experiences">Experiences</Link>
        </li>
        <li>
          <Link href="/blogs">Blog</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
