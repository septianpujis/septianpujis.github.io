"use client";
import React, { useState } from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <header className={classes[`nav`]}>
      <div className={`container ${classes[`nav-content`]}`}>
        <div className={classes[`nav-left`]}>Septi</div>
        <div className={classes[`nav-center`]}>Hero</div>
        <div className={classes[`nav-right`]}>
          <div
            onClick={() => setIsMenu(!isMenu)}
            className={classes["menu-icon"]}
          >
            ==
          </div>
        </div>
      </div>
      {isMenu && (
        <>
          <div
            className={classes["menu-list__overlay"]}
            onClick={() => setIsMenu(!isMenu)}
          />
          <ul className={classes["menu-list"]}>
            <li>Hero</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </>
      )}
    </header>
  );
};

export default Nav;
