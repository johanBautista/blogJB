import Link from "next/link";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        Logo
      </Link>
      <input className={classes.menuBtn} type="checkbox" id="menuBtn" />
      <label className={classes.menuIcon} for="menuBtn">
        <span className={classes.navicon}></span>
      </label>
      <ul className={classes.menu}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/experience">Experiences</Link>
        </li>
        <li>
          <Link href="/blogs">Blog</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
