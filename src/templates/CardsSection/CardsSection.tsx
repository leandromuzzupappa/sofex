import { Heading } from "@components/Heading/Heading";
import { Text } from "@components/Text/Text";
import { CardSmall } from "@components/cards/CardSmall/CardSmall";
import styles from "./CardsSection.module.css";
import { IconNames } from "@data/interfaces/Icons";
import { Color } from "@data/types/Colors";

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
  return (
    <section className={`${styles.cardsSection} ${classList}`}>
      <Heading
        level={2}
        classList={styles.headline}
        text={headline}
        font="changa"
        weight="semi-bold"
        color={color}
      />

      <Text text={description} classList={styles.description} color={color} />

      <div className={styles.cardsWrapper}>
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
