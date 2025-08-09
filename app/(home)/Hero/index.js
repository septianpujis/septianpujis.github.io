import classes from "./Hero.module.css";
import Image from "next/image";
import React from "react";

import heroImage from "@/public/images/septi.jpeg";

const Hero = () => {
  return (
    <section className={classes[`hero`]}>
      <div className={classes[`hero-image`]}>
        <Image src={heroImage} alt="hero" fill />
      </div>
      <div className={classes[`hero-content`]}>
        <h1>Turn Vision Into Reality</h1>
      </div>
    </section>
  );
};

export default Hero;
