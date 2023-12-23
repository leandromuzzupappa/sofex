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
  selfRef?: React.RefObject<HTMLParagraphElement | HTMLSpanElement>;
}
