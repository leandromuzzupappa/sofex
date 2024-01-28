import { Heading } from "@components/Heading/Heading";
import { Text } from "@components/Text/Text";
import sytles from "./TextContent.module.css";
import { ITextContentProps } from "@data/interfaces/TextContent";

export const TextContent = ({
  classList = "",
  headline,
  text,
  headlineRef,
  textRef,
  ...props
}: ITextContentProps) => {
  return (
    <div className={`${sytles.textContent} ${classList}`}>
      <Heading
        selfRef={headlineRef}
        classList={sytles.headline}
        text={headline}
        {...props}
      />

      <Text selfRef={textRef} classList={sytles.text} text={text} {...props} />
    </div>
  );
};
