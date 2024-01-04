import { ICardDetails } from "@data/interfaces/Card";
import styles from "./card-details.module.css";
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
      <header className={styles.img}>
        <img src={logo} alt={company} />
      </header>
      <main className={styles.content}>
        <div className={styles.quote}>"{quote}"</div>
        <div className={styles.secondary}>{feedback}</div>
        <div className={styles.clientInfo}>
          <div className={styles.title}>{name}</div>
          <div className={styles.secondary}>
            {position} at {company}
          </div>
        </div>
      </main>
    </article>
  );
};
export default CardDetails;
