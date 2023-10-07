import { Footer, Navigation } from "@/component";
import {
  Hero,
  Intro,
  ProductStack,
  Project,
  TechStack,
  Timeline,
} from "@/section";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Intro />
        <TechStack />
        <ProductStack />
        <Project />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}
