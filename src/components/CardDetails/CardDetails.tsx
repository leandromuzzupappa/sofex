import { ICardDetails } from "@data/interfaces/Card";
import styles from "./CardDetails.module.css";
import { Text } from "@components/Text/Text";
const CardDetails = ({
  logo,
  company,
  quote,
  feedback,
  name,
  position,
}: ICardDetails) => {
  return (
    <article className={styles.cardDetails}>
      <header className={styles.imgWrapper}>
        <img src={logo} alt={company} />
      </header>
      <main className={styles.content}>
        <blockquote className={styles.quote}>&quot;{quote}&quot;</blockquote>
        <Text text={feedback} weight={"regular"} classList={styles.text} />
        <div className={styles.clientInfo}>
          <Text text={name} weight={"bold"} classList={styles.title} />
          <Text
            text={`${position} at ${company}`}
            classList={styles.secondary}
          />
        </div>
      </main>
    </article>
  );
};
export default CardDetails;
