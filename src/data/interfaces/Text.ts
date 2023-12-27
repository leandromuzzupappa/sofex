import { Color } from "@data/types/Colors";
import { FontAlign, FontWeight } from "@data/types/Font";

export interface ITextProps {
  text: string;
  tag?: "p" | "span";
  align?: FontAlign;
  weight?: FontWeight;
  classList?: string;
  ellipsis?: boolean;
  ellipsisLines?: number;
  ellipsisButtonText?: string;
  color?: Color;
  selfRef?: React.RefObject<HTMLParagraphElement | HTMLSpanElement>;
}
