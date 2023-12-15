import styles from "./Text.module.css";
import { FontWeight, FontAlign } from "@data/types/Font";

interface ITextProps {
  text: string;
  tag?: "p" | "span";
  align?: FontAlign;
  weight?: FontWeight;
  classList?: string;
}

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
