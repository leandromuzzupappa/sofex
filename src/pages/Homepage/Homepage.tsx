import { Heading } from "@components/Heading/Heading";
import { useState } from "react";

import { Text } from "@components/Text/Text";
import styles from "./Homepage.module.css";
import ThumbnailCard from "@components/thumbnailCard/thumbnailcard";
import { data } from "@data/static/testimonials";
export const Homepage = () => {
  interface DataType {
    company: string;
    name: string;
    clientPhoto: string;
    position: string;
  }

  const [selectedItem, setSelectedItem] = useState<DataType | null>(
    data[0] || null,
  );

  const handleCardSelect = (selectedData: DataType) => {
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
          {data.map(({ name, position, clientPhoto, company }, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};
