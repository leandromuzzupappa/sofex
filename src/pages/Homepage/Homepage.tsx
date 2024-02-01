import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Footer } from "@components/Footer/Footer";
import { Hero } from "@components/Hero/Hero";
import { ProjectsCard } from "@components/ProjectsCard/ProjectsCard";
import { CardsSection } from "@templates/CardsSection/CardsSection";
import { TextContent } from "@templates/TextContent/TextContent";
import { Testimonials } from "@templates/Testimonials/Testimonials";
import styles from "./Homepage.module.css";
import { aboutData } from "@data/static/about";
import { projectsData } from "@data/static/projects";
import { servicesData } from "@data/static/services";

import wave1Img from "@assets/images/wave1.svg";
import wave2Img from "@assets/images/wave2.svg";

gsap.registerPlugin(ScrollTrigger);

export const Homepage = () => {
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const projectsHeadlineRef = useRef<HTMLHeadingElement>(null);
  const projectsTextRef = useRef<HTMLParagraphElement>(null);
  const projectsCardsWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const projectsSection = projectsSectionRef.current;
    const projectsHeadline = projectsHeadlineRef.current;
    const projectsText = projectsTextRef.current;
    const projectsCardsWrapper = projectsCardsWrapperRef.current;

    if (
      !projectsSection ||
      !projectsHeadline ||
      !projectsText ||
      !projectsCardsWrapper
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsSection,
        start: "top 80%",
        end: "bottom 60%",
        scrub: false,
      },
    });

    const config = {
      from: {
        opacity: 0,
        y: 50,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    };

    tl.fromTo(projectsHeadline, config.from, config.to);
    tl.fromTo(projectsText, config.from, config.to);
    tl.fromTo(projectsCardsWrapper, config.from, config.to);
  }, []);

  return (
    <>
      <main>
        <Hero />

        <CardsSection
          classList={styles.servicesSection}
          headline="Nos especializamos para ti"
          description="Nuestra misión es brindar soluciones a la medida de tus necesidades para potenciar tu éxito."
          cards={servicesData}
          id="servicios"
        />

        <section
          ref={projectsSectionRef}
          className={styles.projectsSection}
          id="portfolio"
        >
          <div className={styles.wrapper}>
            <TextContent
              headline="Proyectos"
              headlineRef={projectsHeadlineRef}
              text="Conoce algunos de los proyectos que hemos realizado para nuestros clientes."
              textRef={projectsTextRef}
              classList={styles.projectsText}
              align="center"
              color="white"
              font="changa"
            />

            <div
              ref={projectsCardsWrapperRef}
              className={styles.projectsCardsWrapper}
            >
              {projectsData &&
                projectsData.map((props, index) => (
                  <ProjectsCard
                    key={props.projectTitle + index}
                    {...props}
                    cardDirection={index % 2 === 0 ? "normal" : "reversed"}
                  />
                ))}
            </div>
          </div>

          <div className={styles.projectsBackground}>
            <img
              src={wave1Img}
              alt="wave1"
              className={styles.wave}
              aria-hidden="true"
            />
            <img
              src={wave2Img}
              alt="wave2"
              className={styles.wave}
              aria-hidden="true"
            />
          </div>
        </section>

        <CardsSection
          classList={styles.aboutSection}
          headline="La esencia de Sofexs"
          description="Nuestra historia es un testimonio de dedicación y pasión por la excelencia"
          cards={aboutData}
          color="white"
          ellipsisLines={8}
          id="nosotros"
        />

        <Testimonials />
      </main>
      <Footer />
    </>
  );
};
