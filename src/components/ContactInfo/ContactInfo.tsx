import { Text } from "@components/Text/Text";
import styles from "./ContactInfo.module.css";
import ContactItem from "@components/ContactItem/ContactItem";
import { IconNames } from "@data/interfaces/Icons";

const ContactInfo = () => {
  return (
    <article className={styles.contactCointainer}>
      <div className={styles.content}>
        <Text
          text={"¡Trabajemos Juntos!"}
          weight={"bold"}
          classList={styles.title}
        />
        <Text
          text={
            "Tu vision y nuestro expertise en tecnología son la combinación perfecta para alcanzar un futuro en eficiencia y crecimiento"
          }
          weight={"regular"}
          classList={styles.text}
        />
      </div>
      <div className={styles.contactItems}>
        <ContactItem
          icon={IconNames.WHATSAPP}
          contactPlatform={"WhatsApp:"}
          contactInfo={"(414) 687 - 5892"}
        />
      </div>
      <div className={styles.socialMedias}>
        <Text
          text={"Siguenos en nuestras redes"}
          weight={"bold"}
          classList={styles.subtitle}
        />
      </div>
    </article>
  );
};
export default ContactInfo;
