import { Heading } from "@components/Heading/Heading";
import { useState, useEffect } from "react";

import { ICardDetails, ThumbnailData } from "@data/interfaces/Card";

import { Text } from "@components/Text/Text";
import styles from "./Homepage.module.css";
import ThumbnailCard from "@components/thumbnailCard/thumbnailcard";
import { data } from "@data/static/testimonials";
import CardDetails from "@components/card-details/card-details";

export const Homepage = () => {
  const [selectedItem, setSelectedItem] = useState<ThumbnailData | null>(
    data[0],
  );
  const [cardDetailsData, setCardDetailsData] = useState<ICardDetails | null>(
    null,
  );
  useEffect(() => {
    if (selectedItem) {
      const foundItem = data.find(
        (item) => item.company === selectedItem.company,
      );
      if (foundItem) {
        setCardDetailsData(foundItem);
      }
    }
  }, [selectedItem]);
  const handleCardSelect = (selectedData: ThumbnailData) => {
    setSelectedItem(selectedData);
  };
  console.log(selectedItem);
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
        <div className={styles.cardDetailsContainer}>
          {cardDetailsData && (
            <CardDetails
              logo={cardDetailsData.logo}
              company={cardDetailsData.company}
              quote={cardDetailsData.quote}
              feedback={cardDetailsData.feedback}
              name={cardDetailsData.name}
              position={cardDetailsData.position}
            />
          )}
        </div>
      </div>
    </div>
  );
};
