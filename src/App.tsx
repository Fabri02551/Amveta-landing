import { MotionConfig } from "motion/react";
import { useTranslation } from "react-i18next";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Manifesto } from "./components/Manifesto";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { SmoothScroll } from "./components/SmoothScroll";

export default function App() {
  const { t } = useTranslation();

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <ScrollProgress />

      <a
        href="#contenido"
        className="skip-link"
        onClick={() => {
          window.setTimeout(() => {
            document.getElementById("contenido")?.focus();
          }, 50);
        }}
      >
        {t("a11y.skip")}
      </a>

      <Navbar />

      <main id="contenido" tabIndex={-1} className="outline-none">
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Manifesto />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}
