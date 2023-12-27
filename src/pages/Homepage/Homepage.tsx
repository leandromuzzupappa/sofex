import { useState } from "react";
import { Heading } from "@components/Heading/Heading";
import { Text } from "@components/Text/Text";
import { Button } from "@components/Button/Button";
import { CardsSection } from "@/templates/CardsSection/CardsSection";
import styles from "./Homepage.module.css";
import { IconNames } from "@data/interfaces/Icons";
import { aboutData } from "@data/static/about";
import { servicesData } from "@data/static/services";

export const Homepage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Heading text="Sofexs" level={1} font="changa" classList={styles.title} />
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
        headline="Nos especializamos para ti"
        description="Nuestra misión es brindar soluciones a la medida de tus necesidades para potenciar tu éxito."
        cards={servicesData}
      />

      <CardsSection
        headline="La esencia de Sofexs"
        description="Nuestra historia es un testimonio de dedicación y pasión por la excelencia"
        cards={aboutData}
        classList={styles.aboutSection}
        color="white"
      />
    </div>
  );
};
