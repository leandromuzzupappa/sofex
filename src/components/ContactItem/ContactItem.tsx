import { Icon } from "@components/Icon/Icon";
import styles from "./ContactItem.module.css";
import { IContactItemProps } from "@data/interfaces/ContactItem";
import { Text } from "@components/Text/Text";

const ContactItem = ({
  icon,
  contactPlatform,
  contactInfo,
}: IContactItemProps) => {
  return (
    <div className={styles.contactItem}>
      <div className={styles.iconWrapper}>
        <Icon name={icon} classList={styles.icon} />
      </div>
      <div className={styles.contentWrapper}>
        <Text
          text={contactPlatform}
          weight={"regular"}
          classList={styles.title}
        />
        <Text text={contactInfo} weight={"bold"} classList={styles.subtitle} />
      </div>
    </div>
  );
};
export default ContactItem;
