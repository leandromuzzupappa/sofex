import { useEffect, useState } from "react";
import { CardDetails } from "@components/CardDetails/CardDetails";
import { ThumbnailCard } from "@components/ThumbnailCard/ThumbnailCard";
import styles from "./Testimonials.module.css";
import { IThumbnailData, ICardDetails } from "@data/interfaces/Card";
import { testimonialsData } from "@data/static/testimonials";

export const Testimonials = () => {
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
    <section className={styles.testimonialsSection}>
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
    </section>
  );
};
