import styles from "./Text.module.css";
import { ITextProps } from "@data/interfaces/Text";

export const Text = ({
  text,
  align = "left",
  tag = "p",
  weight = "regular",
  classList = "",
}: ITextProps) => {
  const Tag = tag;

  return (
    <Tag
      className={`${styles.text} ${classList}`}
      data-align={align}
      data-font-weight={weight}
    >
      {text}
    </Tag>
  );
};
