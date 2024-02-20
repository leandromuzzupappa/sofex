import { Icon } from "@components/Icon/Icon";
import styles from "./SocialMedia.module.css";
import { ISocialMediaProps } from "@data/interfaces/SocialMedia";

const SocialMedia = ({ icon }: ISocialMediaProps) => {
  return (
    <a href="" className={styles.socialMediaIcon}>
      <div className={styles.iconWrapper}>
        <Icon name={icon} classList={styles.icon} />
      </div>
    </a>
  );
};
export default SocialMedia;
