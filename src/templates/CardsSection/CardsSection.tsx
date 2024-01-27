import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Heading } from "@components/Heading/Heading";
import { Text } from "@components/Text/Text";
import { CardSmall } from "@components/cards/CardSmall/CardSmall";
import styles from "./CardsSection.module.css";
import { IconNames } from "@data/interfaces/Icons";
import { Color } from "@data/types/Colors";

gsap.registerPlugin(ScrollTrigger);

interface ICardsSectionProps {
  cards: { [key: string]: string }[];
  classList?: string;
  description: string;
  headline: string;
  color?: Color;
}

export const CardsSection = ({
  cards,
  classList = "",
  description,
  headline,
  color = "black",
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
      <Heading
        selfRef={titleRef}
        level={2}
        classList={styles.headline}
        text={headline}
        font="changa"
        weight="semi-bold"
        color={color}
      />

      <Text
        selfRef={descriptionRef}
        text={description}
        classList={styles.description}
        color={color}
      />

      <div ref={cardsWrapperRef} className={styles.cardsWrapper}>
        {cards.map((item, index) => (
          <CardSmall
            key={index}
            headline={item.headline}
            icon={IconNames[item.icon as keyof typeof IconNames]}
            description={item.text}
            ellipsis
            ellipsisLines={4}
            ellipsisButtonText="Leer más"
          />
        ))}
      </div>
    </section>
  );
};
