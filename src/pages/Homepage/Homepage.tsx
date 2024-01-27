import { Header } from "@components/Header/Header";
import { Hero } from "@components/Hero/Hero";
import { CardsSection } from "@templates/CardsSection/CardsSection";
import styles from "./Homepage.module.css";
import { servicesData } from "@data/static/services";

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
      </main>
    </>
  );
};
