import { Color } from "@data/types/Colors";
import { Font, FontWeight } from "@data/types/Font";

export interface IHeadingProps {
  text: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  font?: Font;
  weight?: FontWeight;
  classList?: string;
  color?: Color;
}
