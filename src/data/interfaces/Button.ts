import { IconNames } from "./Icons";

export interface IButtonProps {
  block?: boolean;
  classList?: string;
  color?: "white" | "black" | "grey" | "green" | "teal";
  disabled?: boolean;
  href?: string;
  icon?: IconNames;
  iconPosition?: "left" | "right";
  iconClassList?: string;
  loading?: boolean;
  shape?: "" | "pill" | "rounded";
  text: string;
  theme?: "primary" | "secondary";
  underline?: boolean;
  variant?: "" | "filled" | "outlined";
  onclick?: () => void;
}
