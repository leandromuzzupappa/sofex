import { IThumbnailCard } from "@data/interfaces/Card";
import styles from "./ThumbnailCard.module.css";
import { Text } from "@components/Text/Text";
export const ThumbnailCard = ({
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
      <div className={styles.imgWrapper}>
        <img src={clientPhoto} alt={name} />
      </div>
      <div className={styles.contentWrapper}>
        <Text text={name} weight="bold" classList={styles.title} />
        <Text text={`${position} at ${company}`} classList={styles.secondary} />
      </div>
    </button>
  );
};

export default ThumbnailCard;
