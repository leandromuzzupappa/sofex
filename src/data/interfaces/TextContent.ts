import { IHeadingProps } from "./Heading";
import { ITextProps } from "./Text";

export interface ITextContentProps
  extends Omit<IHeadingProps, "selfRef">,
    Omit<ITextProps, "selfRef"> {
  classList?: string;
  headline: string;
  headlineRef?: IHeadingProps["selfRef"];
  text: string;
  textRef?: ITextProps["selfRef"];
}
