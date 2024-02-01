import { Text } from "@components/Text/Text";
import styles from "./CardLarge.module.css";
import { ILargeCardProps } from "@data/interfaces/Card";
const CardLarge = ({ projectsTechnologies }: ILargeCardProps) => {
  console.log(projectsTechnologies);
  return (
    <article className={styles.cardLarge}>
      <div className={styles.iconWrapper}>
        <img src={projectsTechnologies.techIcon} alt="" />
      </div>
      <div className={styles.contentWrapper}>
        <Text
          text={projectsTechnologies.description}
          align={"left"}
          weight={"regular"}
        />
      </div>
    </article>
  );
};
export default CardLarge;
