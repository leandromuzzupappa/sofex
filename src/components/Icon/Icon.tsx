import styles from "./Icon.module.css";
import { iconList, IIconProps } from "@data/interfaces/Icons";

export const Icon = ({ name, classList = "", selfRef }: IIconProps) => {
  const IconComponent = iconList[name as keyof typeof iconList];

  return (
    <span ref={selfRef} className={`${styles.icon} ${classList}`}>
      <IconComponent />
    </span>
  );
};
