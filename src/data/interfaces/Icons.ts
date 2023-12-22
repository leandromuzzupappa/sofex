import {
  AccessibilityIcon,
  AppsIcon,
  LeftArrow,
  DownArrow,
  RightArrow,
  CampaignIcon,
  CloudIcon,
  ContrastIcon,
  SoftwareIcon,
  TargetIcon,
  ValuesIcon,
  VisionIcon,
} from "@components/Icons";

export interface IIconProps {
  name: IconNames;
  classList?: string;
  selfRef?: React.RefObject<HTMLSpanElement>;
}

export enum IconNames {
  ACCESSIBILITY = "accessibility",
  APPS = "apps",
  LEFTARROW = "leftArrow",
  DOWNARROW = "downArrow",
  RIGHTARROW = "rightArrow",
  CAMPAIGN = "campaign",
  CLOUD = "cloud",
  CONTRAST = "contrast",
  SOFTWARE = "software",
  TARGET = "target",
  VALUES = "values",
  VISION = "vision",
}

export const iconList = {
  [IconNames.ACCESSIBILITY]: AccessibilityIcon,
  [IconNames.APPS]: AppsIcon,
  [IconNames.LEFTARROW]: LeftArrow,
  [IconNames.DOWNARROW]: DownArrow,
  [IconNames.RIGHTARROW]: RightArrow,
  [IconNames.CAMPAIGN]: CampaignIcon,
  [IconNames.CLOUD]: CloudIcon,
  [IconNames.CONTRAST]: ContrastIcon,
  [IconNames.SOFTWARE]: SoftwareIcon,
  [IconNames.TARGET]: TargetIcon,
  [IconNames.VALUES]: ValuesIcon,
  [IconNames.VISION]: VisionIcon,
};
