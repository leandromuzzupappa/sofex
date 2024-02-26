import { IconNames } from "./Icons";
import { Color } from "@data/types/Colors";
import { PositionH } from "@data/types/Position";

export interface IButtonProps {
  block?: boolean;
  classList?: string;
  color?: Color;
  disabled?: boolean;
  href?: string;
  icon?: IconNames;
  iconPosition?: Exclude<PositionH, "center">;
  iconClassList?: string;
  loading?: boolean;
  shape?: "" | "pill" | "rounded";
  text: string;
  theme?: "primary" | "secondary";
  underline?: boolean;
  variant?: "" | "filled" | "outlined";
  selfRef?: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
  onclick?: () => void;
  type?: "button" | "reset" | "submit";
}
