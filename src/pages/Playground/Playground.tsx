import { Heading } from "@components/Heading/Heading";
import { useState, useEffect } from "react";
import { Text } from "@components/Text/Text";
import { Button } from "@components/Button/Button";
import { CardsSection } from "@templates/CardsSection/CardsSection";
import { Hero } from "@components/Hero/Hero";
import styles from "./Playground.module.css";
import { IconNames } from "@data/interfaces/Icons";
import { aboutData } from "@data/static/about";
import { servicesData } from "@data/static/services";
import { projectsData } from "@data/static/projects";
import { testimonialsData } from "@data/static/testimonials";
import { ICardDetails, IThumbnailData } from "@data/interfaces/Card";
import CardDetails from "@components/CardDetails/CardDetails";
import ThumbnailCard from "@components/ThumbnailCard/ThumbnailCard";
import { ProjectsCard } from "@components/ProjectsCard/ProjectsCard";
import CardLarge from "@components/cards/CardLarge/CardLarge";
import FormSection from "@templates/FormSection/FormSection";
export const Playground = () => {
  const [loading, setLoading] = useState(false);

  const [selectedItem, setSelectedItem] = useState<IThumbnailData | null>(
    testimonialsData[0],
  );
  const [cardDetailsData, setCardDetailsData] = useState<ICardDetails | null>(
    null,
  );
  useEffect(() => {
    if (selectedItem) {
      const foundItem = testimonialsData.find(
        (item) => item.company === selectedItem.company,
      );
      if (foundItem) {
        setCardDetailsData(foundItem);
      }
    }
  }, [selectedItem]);
  const handleCardSelect = (selectedData: IThumbnailData) => {
    setSelectedItem(selectedData);
  };
  return (
    <>
      <main>
        <Hero />

        <CardsSection
          headline="Nos especializamos para ti"
          description="Nuestra misión es brindar soluciones a la medida de tus necesidades para potenciar tu éxito."
          cards={servicesData}
          classList={styles.servicesSection}
        />

        <Heading
          text="Sofexs"
          level={1}
          font="changa"
          classList={styles.title}
        />
        <Text
          text="Construye tu negocio con nosotros"
          align="center"
          classList={styles.description}
        />
        <Button
          text="Ver todos los trabajos"
          loading={loading}
          onclick={() => setLoading(!loading)}
          color="green"
          variant="outlined"
          icon={IconNames.RIGHTARROW}
          iconPosition="right"
          theme="secondary"
        />

        <CardsSection
          headline="La esencia de Sofexs"
          description="Nuestra historia es un testimonio de dedicación y pasión por la excelencia"
          cards={aboutData}
          classList={styles.aboutSection}
          color="white"
        />
        <div className={styles.customersContainer}>
          <div className={styles.customers}>
            {testimonialsData.map(
              ({ name, position, clientPhoto, company }, index) => (
                <ThumbnailCard
                  name={name}
                  position={position}
                  clientPhoto={clientPhoto}
                  company={company}
                  key={index}
                  isSelected={selectedItem?.company === company}
                  handleClick={() =>
                    handleCardSelect({ name, position, clientPhoto, company })
                  }
                />
              ),
            )}
          </div>
          <div className={styles.cardDetailsContainer}>
            {cardDetailsData ? (
              <CardDetails
                logo={cardDetailsData.logo}
                company={cardDetailsData.company}
                quote={cardDetailsData.quote}
                feedback={cardDetailsData.feedback}
                name={cardDetailsData.name}
                position={cardDetailsData.position}
              />
            ) : null}
          </div>
        </div>
        <div className={styles.projectsCard}>
          {projectsData && (
            <>
              {projectsData.map((props, index) => (
                <ProjectsCard
                  {...props}
                  cardDirection={index % 2 === 0 ? "normal" : "reversed"}
                />
              ))}
            </>
          )}
        </div>
        <div className={styles.technologiesCards}>
          {projectsData.map((project) => (
            <>
              {project.projectsTechnologies?.map((technology, techIndex) => (
                <CardLarge key={techIndex} projectsTechnologies={technology} />
              ))}
            </>
          ))}
        </div>
        <FormSection />
      </main>
    </>
  );
};
