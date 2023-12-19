import { LeftArrow, DownArrow, RightArrow } from "@components/Icon/ArrowIcons";

export interface IIconProps {
  name: IconNames;
  classList?: string;
  selfRef?: React.RefObject<HTMLSpanElement>;
}

export enum IconNames {
  LEFTARROW = "leftArrow",
  DOWNARROW = "downArrow",
  RIGHTARROW = "rightArrow",
}

export const iconList = {
  [IconNames.LEFTARROW]: LeftArrow,
  [IconNames.DOWNARROW]: DownArrow,
  [IconNames.RIGHTARROW]: RightArrow,
};
