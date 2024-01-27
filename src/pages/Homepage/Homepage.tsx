import { Header } from "@components/Header/Header";
import { Hero } from "@components/Hero/Hero";
import { ProjectsCard } from "@components/ProjectsCard/ProjectsCard";
import { CardsSection } from "@templates/CardsSection/CardsSection";
import { TextContent } from "@templates/TextContent/TextContent";
import styles from "./Homepage.module.css";
import { projectsData } from "@data/static/projects";
import { servicesData } from "@data/static/services";

import wave1Img from "@assets/images/wave1.svg";
import wave2Img from "@assets/images/wave2.svg";

export const Homepage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <CardsSection
          classList={styles.servicesSection}
          headline="Nos especializamos para ti"
          description="Nuestra misión es brindar soluciones a la medida de tus necesidades para potenciar tu éxito."
          cards={servicesData}
        />

        <section className={styles.projectsSection}>
          <div className={styles.wrapper}>
            <TextContent
              headline="Proyectos"
              text="Conoce algunos de los proyectos que hemos realizado para nuestros clientes."
              classList={styles.projectsText}
              align="center"
              color="white"
              font="changa"
            />

            {projectsData &&
              projectsData.map((props, index) => (
                <ProjectsCard
                  key={props.projectTitle + index}
                  {...props}
                  cardDirection={index % 2 === 0 ? "normal" : "reversed"}
                />
              ))}
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
      </main>
    </>
  );
};
