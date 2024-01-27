import styles from "./Heading.module.css";
import { IHeadingProps } from "@data/interfaces/Heading";
import { parseLineBreaks } from "@/utils/string";

export const Heading = ({
  text,
  align = "left",
  level = 2,
  font = "roboto",
  weight = "regular",
  classList = "",
  color = "black",
  selfRef,
}: IHeadingProps) => {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return (
    <Tag
      ref={selfRef as React.RefObject<HTMLHeadingElement>}
      className={`${styles.heading} ${classList}`}
      data-align={align}
      data-font-family={font}
      data-font-weight={weight}
      data-color={color}
    >
      {parseLineBreaks(text).map((line, i) => (
        <span key={i + line}>{line}</span>
      ))}
    </Tag>
  );
};
