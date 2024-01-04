import { Heading } from "@components/Heading/Heading";
import { SetStateAction, useState } from "react";

import { Text } from "@components/Text/Text";
import styles from "./Homepage.module.css";
import ThumbnailCard from "@components/thumbnailCard/thumbnailcard";
import { data } from "@/utils/data";
import CardDetails from "@components/card-details/card-details";
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
      </div>
    </div>
  );
};
