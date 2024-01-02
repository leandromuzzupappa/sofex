import { Heading } from "@components/Heading/Heading";
import { SetStateAction, useState } from "react";

import { Text } from "@components/Text/Text";
import styles from "./Homepage.module.css";
import ThumbnailCard from "@components/thumbnailCard/thumbnailcard";
import { data } from "@/utils/data";
import CardDetails from "@components/card-details/card-details";
import CardExpand from "@components/cardExpand/card-expand";
export const Homepage = () => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleCardSelect = (
    selectedData: SetStateAction<{
      company: string;
      logo: string;
      name: string;
      clientPhoto: string;
      position: string;
      quote: string;
      feedback: string;
    }>,
  ) => {
    setSelectedItem(selectedData);
  };
  return (
    <div>
      <Heading text="Sofexs" level={1} font="changa" classList={styles.title} />
      <Text
        text="Construye tu negocio con nosotros"
        align="center"
        classList={styles.description}
      />
      <div className={styles.customersContainer}>
        <div className={styles.customers}>
          {data.map((companyData, index) => (
            <ThumbnailCard
              data={companyData}
              key={index}
              isSelected={selectedItem === companyData}
              handleClick={() => handleCardSelect(companyData)}
            />
          ))}
        </div>
        <div className={styles.cardDetailsContainer}>
          <CardDetails data={selectedItem} />
        </div>
        <div className={styles.sofexs}>
          <CardExpand
            title={"Mision"}
            content={
              "Nuestra Misión es crear soluciones de software innovadoras y de alta calidad que impulsen el éxito de nuestros clientes y mejoren la vida de las personas. Nos comprometemos a ofrecer productos y servicios excepcionales que transformen desafíos en oportunidades y que sean reconocidos por su excelencia y confiabilidad."
            }
          />
          <CardExpand
            title={"Vision"}
            content={
              "Nuestra Visión es ser líderes globales en el desarrollo de software, siendo reconocidos por nuestra capacidad para adaptarnos a las cambiantes demandas tecnológicas y por nuestra contribución a la mejora del mundo mediante la innovación y la tecnología. Nos esforzamos por ser una empresa en constante evolución que inspire a otros a alcanzar su máximo potencial."
            }
          />
          <CardExpand
            title={"Valores"}
            content={
              "Nos comprometemos a ofrecer productos y servicios de la más alta calidad. La excelencia es nuestro estándar y buscamos la mejora continua en todo lo que hacemos. Fomentamos la creatividad y la innovación en todos los aspectos de nuestro trabajo. Estamos dispuestos a asumir riesgos calculados para lograr avances significativos. Actuamos con honestidad y transparencia en todas nuestras interacciones, tanto internas como externas."
            }
          />
        </div>
      </div>
    </div>
  );
};
