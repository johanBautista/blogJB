import Navbar from "../navbar/Navbar";
import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <main className={classes.container}>
      <Navbar />
      <div className={classes.children}>{children}</div>
    </main>
  );
};

export default Layout;
