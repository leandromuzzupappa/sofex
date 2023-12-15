import styles from "./Heading.module.css";
type Font = "roboto" | "changa";
type FontWeight = "regular" | "semi-bold" | "bold";

interface IHeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  font?: Font;
  weight?: FontWeight;
  classList?: string;
}

export const Heading = ({
  text,
  level = 2,
  font = "roboto",
  weight = "regular",
  classList = "",
}: IHeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`${styles.heading} ${classList}`}
      data-font-family={font}
      data-font-weight={weight}
    >
      {text}
    </Tag>
  );
};
