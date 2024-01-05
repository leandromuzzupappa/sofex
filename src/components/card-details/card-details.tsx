import { ICardDetails } from "@data/interfaces/Card";
import styles from "./Card-details.module.css";
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
        <p className={styles.secondary}>{feedback}</p>
        <div className={styles.clientInfo}>
          <p className={styles.title}>{name}</p>
          <p className={styles.secondary}>
            {position} at {company}
          </p>
        </div>
      </main>
    </article>
  );
};
export default CardDetails;
