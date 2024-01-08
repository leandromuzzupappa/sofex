import styles from "./Heading.module.css";
import { IHeadingProps } from "@data/interfaces/Heading";

export const Heading = ({
  text,
  level = 2,
  font = "roboto",
  weight = "regular",
  classList = "",
  color = "black",
}: IHeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`${styles.heading} ${classList}`}
      data-font-family={font}
      data-font-weight={weight}
      data-color={color}
    >
      {text}
    </Tag>
  );
};
