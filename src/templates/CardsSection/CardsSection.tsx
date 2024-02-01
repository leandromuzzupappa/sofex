import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CardSmall } from "@components/cards/CardSmall/CardSmall";
import { TextContent } from "@templates/TextContent/TextContent";
import styles from "./CardsSection.module.css";
import { IconNames } from "@data/interfaces/Icons";
import { ICardsSectionProps } from "@data/interfaces/Cards";

gsap.registerPlugin(ScrollTrigger);

export const CardsSection = ({
  cards,
  classList = "",
  description,
  headline,
  color = "black",
  ...props
}: ICardsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const cardsWrapper = cardsWrapperRef.current;

    if (!section || !title || !description || !cardsWrapper) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 80%",
        scrub: false,
      },
    });

    const config = {
      from: { y: 50, opacity: 0 },
      to: { y: 0, opacity: 1 },
    };

    tl.fromTo(title, config.from, config.to);
    tl.fromTo(description, config.from, config.to);
    tl.fromTo(cardsWrapper.children, config.from, {
      ...config.to,
      stagger: 0.2,
    });
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.cardsSection} ${classList}`}>
      <TextContent
        headline={headline}
        headlineRef={titleRef}
        text={description}
        textRef={descriptionRef}
        classList={styles.servicesText}
        align="center"
        color={color}
        font="changa"
      />

      <div ref={cardsWrapperRef} className={styles.cardsWrapper}>
        {cards.map((item, index) => (
          <CardSmall
            key={index}
            headline={item.headline}
            icon={IconNames[item.icon as keyof typeof IconNames]}
            description={item.text}
            ellipsis
            ellipsisLines={props.ellipsisLines || 4}
            ellipsisButtonText="Leer más"
          />
        ))}
      </div>
    </section>
  );
};
