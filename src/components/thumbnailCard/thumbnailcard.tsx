import { IThumbnailCard } from "@data/interfaces/Card";
import styles from "./Thumbnailcard.module.css";
const ThumbnailCard = ({
  name,
  position,
  clientPhoto,
  company,
  handleClick,
  isSelected,
}: IThumbnailCard) => {
  return (
    <button
      className={`${styles.thumbnailCard} ${
        isSelected ? `${styles.selected}` : ""
      }`}
      onClick={() => handleClick({ name, clientPhoto, position, company })}
    >
      <header className={styles.imgWrapper}>
        <img src={clientPhoto} alt={name} />
      </header>
      <main className={styles.contentWrapper}>
        <h1 className={styles.title}>{name}</h1>
        <h2 className={styles.secondary}>
          {position} at {company}
        </h2>
      </main>
    </button>
  );
};

export default ThumbnailCard;
