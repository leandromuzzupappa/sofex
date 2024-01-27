import { Color } from "@data/types/Colors";
import { Font, FontAlign, FontWeight } from "@data/types/Font";

export interface IHeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  align?: FontAlign;
  weight?: FontWeight;
  classList?: string;
  color?: Color;
  font?: Font;
  selfRef?: React.RefObject<HTMLHeadingElement>;
}
