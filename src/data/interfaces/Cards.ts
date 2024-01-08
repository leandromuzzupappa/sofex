import { IconNames } from "./Icons";
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
