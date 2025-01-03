{/* 
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./Navbar.module.scss";
import logoImage from '../../public/favicon.ico';


const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  const data = [{ id: 1, name: "Experiences", path: "/experiences" }, { id: 2, name: "Blog", path: "/blogs" }]

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue("--initial-color-mode");
    setDarkTheme(initialColorValue === "dark");
  }, []);

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logoImage} alt="logo" width={40} height={40} />
      </Link>

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

      // navbar responsive 
      <input className={classes.menuBtn} type="checkbox" id="menuBtn" />
      <label className={classes.menuIcon} htmlFor="menuBtn">
        <span className={classes.navicon}></span>
      </label>
      // menu items
      <ul className={classes.menu}>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>{item.name}</Link></li>))}
      </ul>
      </header >
    );
  };
  
  export default Navbar;
  */}
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./Navbar.module.scss";
import logoImage from "../../public/favicon.ico";

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  const navItems = [
    { id: 1, name: "Experiences", path: "/experiences" },
    { id: 2, name: "Blog", path: "/blogs" },
  ];

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.setAttribute("data-theme", "dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      window.localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = document.documentElement;
    const initialColorMode = root.style.getPropertyValue("--initial-color-mode");
    setDarkTheme(initialColorMode === "dark");
  }, []);

  return (
    <header className={classes["header"]}>
      <div className={classes["navbar"]}>
        <Link href="/" className={classes["navbar__logo"]}>
          <Image src={logoImage} alt="Logo" width={40} height={40} />
        </Link>

        <div className={classes["navbar__theme-switch"]}>
          <label className={classes["theme-switch"]}>
            <input
              type="checkbox"
              checked={darkTheme}
              onChange={handleToggle}
              className={classes["theme-switch__input"]}
            />
            <span className={classes["theme-switch__slider"]}></span>
          </label>
        </div>
        {/**
        <nav className={classes["navbar__menu"]}>
          <input
            type="checkbox"
            id="menuToggle"
            className={classes["navbar__menu-toggle"]}
          />
          <label
            htmlFor="menuToggle"
            className={classes["navbar__menu-icon"]}
          >
            <span className={classes["navbar__menu-line"]}></span>
          </label>
          <ul className={classes["navbar__menu-list"]}>
            {navItems.map((item) => (
              <li key={item.id} className={classes["navbar__menu-item"]}>
                <Link href={item.path} className={classes["navbar__menu-link"]}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        */}
      </div>
    </header>
  );
};

export default Navbar;
