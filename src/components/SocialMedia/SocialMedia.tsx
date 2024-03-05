import { Icon } from "@components/Icon/Icon";
import styles from "./SocialMedia.module.css";
import { ISocialMediaProps } from "@data/interfaces/SocialMedia";

const SocialMedia = ({ icon, urlTo, socialMediaName }: ISocialMediaProps) => {
  return (
    <a
      href={urlTo}
      className={styles.socialMediaIcon}
      title={socialMediaName}
      target="_blank"
    >
      <div className={styles.iconWrapper}>
        <Icon name={icon} classList={styles.icon} />
      </div>
    </a>
  );
};
export default SocialMedia;
