import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes[`footer`]}>
      <ul className={`container ${classes[`footer-menu`]}`}>
        <li>Email</li>
        <li>Github</li>
        <li>Linkedin</li>
        <li>UP</li>
      </ul>
      <div className={classes[`footer-copy`]}>SEPTIAN PUJI</div>
    </footer>
  );
};

export default Footer;
