"use client";
import Bridge from "./Bridge";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Project from "./Project";
import Skill from "./Skill";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Bridge />
      <Project />
      <Skill />
      <Footer />
    </>
  );
}
