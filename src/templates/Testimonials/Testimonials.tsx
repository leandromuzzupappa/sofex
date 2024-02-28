import { useEffect, useState, useRef } from "react";
import { CardDetails } from "@components/CardDetails/CardDetails";
import { ThumbnailCard } from "@components/ThumbnailCard/ThumbnailCard";
import styles from "./Testimonials.module.css";
import { IThumbnailData, ICardDetails } from "@data/interfaces/Card";
import { testimonialsData } from "@data/static/testimonials";
import { IconNames } from "@data/interfaces/Icons";
import { Button } from "@components/Button/Button";
import { useMediaQuery } from "@react-hook/media-query";

export const Testimonials = () => {
  const [selectedItem, setSelectedItem] = useState<IThumbnailData | null>(
    testimonialsData[0],
  );
  const [cardDetailsData, setCardDetailsData] = useState<ICardDetails | null>(
    null,
  );
  const cardDetailsContainerRef = useRef<HTMLDivElement>(null); // Referencia al contenedor de tarjetas de detalles
  const isMobile = useMediaQuery("(max-width: 1024px)");

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

  // Función para desplazar las tarjetas hacia la izquierda
  const scrollLeft = () => {
    if (cardDetailsContainerRef.current) {
      const container = cardDetailsContainerRef.current;
      const cardWidth = container.children[0].clientWidth;
      container.scrollTo({
        left: container.scrollLeft - cardWidth,
        behavior: "smooth", // Desplazamiento suave
      });
    }
  };

  // Función para desplazar las tarjetas hacia la derecha
  const scrollRight = () => {
    if (cardDetailsContainerRef.current) {
      const container = cardDetailsContainerRef.current;
      const cardWidth = container.children[0].clientWidth;
      container.scrollTo({
        left: container.scrollLeft + cardWidth,
        behavior: "smooth", // Desplazamiento suave
      });
    }
  };

  return (
    <section className={styles.testimonialsSection} id="clientes">
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
        <div
          className={styles.cardDetailsContainer}
          ref={cardDetailsContainerRef}
        >
          {testimonialsData && cardDetailsData ? (
            <>
              {isMobile ? (
                testimonialsData.map(
                  ({ logo, company, quote, feedback, name, position }) => (
                    <CardDetails
                      logo={logo}
                      company={company}
                      quote={quote}
                      feedback={feedback}
                      name={name}
                      position={position}
                      key={name} // Agrega una clave única para cada tarjeta de detalles
                    />
                  ),
                )
              ) : (
                <CardDetails
                  logo={cardDetailsData.logo}
                  company={cardDetailsData.company}
                  quote={cardDetailsData.quote}
                  feedback={cardDetailsData.feedback}
                  name={cardDetailsData.name}
                  position={cardDetailsData.position}
                />
              )}
            </>
          ) : null}
        </div>
        <div className={styles.controllers}>
          <Button
            text={""}
            theme="primary"
            variant=""
            shape="rounded"
            icon={IconNames.LEFTARROW}
            iconPosition="left"
            classList={styles.controller}
            onclick={scrollLeft} // Desplaza hacia la izquierda al hacer clic
          />
          <Button
            text={""}
            theme="primary"
            variant=""
            shape="rounded"
            icon={IconNames.RIGHTARROW}
            iconPosition="right"
            classList={styles.controller}
            onclick={scrollRight} // Desplaza hacia la derecha al hacer clic
          />
        </div>
      </div>
    </section>
  );
};
