import { Text } from "@components/Text/Text";
import styles from "./CardLarge.module.css";
const CardLarge = () => {
  return (
    <article className={styles.cardLarge}>
      <div className={styles.iconWrapper}>
        <img
          src="https://imgs.search.brave.com/vW62EhmdMfk7HjQovK_01sgTw5y8V14RQQYtRb1jONQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzMzL0ZpZ21hLWxv/Z28uc3Zn.svg"
          alt=""
        />
      </div>
      <div className={styles.contentWrapper}>
        <Text
          text="Figma nos permitió crear prototipos interactivos y diseños visuales colaborativos en tiempo real. Desde la conceptualización de la interfaz hasta la creación de wireframes y prototipos."
          align={"left"}
          weight={"regular"}
        />
      </div>
    </article>
  );
};
export default CardLarge;
