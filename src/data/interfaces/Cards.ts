import { IconNames } from "./Icons";
import { ITextContentProps } from "./TextContent";
import { Color } from "@data/types/Colors";
import { PositionH } from "@data/types/Position";

export interface ICardSmallProps {
  classList?: string;
  color?: Color;
  description: string;
  headline: string;
  icon?: IconNames;
  iconPosition?: PositionH;
  iconClassList?: string;
  ellipsis?: boolean;
  ellipsisLines?: number;
  ellipsisButtonText?: string;
}

export interface ICardsSectionProps
  extends Omit<ITextContentProps, "text">,
    ICardSmallProps {
  cards: { [key: string]: string }[];
  classList?: string;
  description: string;
  headline: string;
  color?: Color;
  id?: string;
}
