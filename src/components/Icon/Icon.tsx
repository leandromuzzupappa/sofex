import styles from "./Icon.module.css";
import { iconList, IIconProps } from "@data/interfaces/Icons";

export const Icon = ({ name, classList = "" }: IIconProps) => {
  const IconComponent = iconList[name as keyof typeof iconList];

  return (
    <span className={`${styles.icon} ${classList}`}>
      <IconComponent />
    </span>
  );
};
