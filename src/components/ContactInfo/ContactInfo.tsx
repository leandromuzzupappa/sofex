import { Text } from "@components/Text/Text";
import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactCointainer}>
      <Text
        text={"Trabajemos Juntos!"}
        weight={"regular"}
        classList={styles.contactTitle}
      />
      <Text
        text={
          "Tu vision y nuestro expertise en tecnología son la combinación perfecta para alcanzar un futuro en eficiencia y crecimiento"
        }
        weight={"regular"}
        classList={styles.text}
      />
    </div>
  );
};
export default ContactInfo;
