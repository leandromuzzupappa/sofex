import React from "react";
import styles from "./Text.module.css";
import { ITextProps } from "@data/interfaces/Text";

export const Text = ({
  text,
  align = "left",
  tag = "p",
  weight = "regular",
  classList = "",
  ellipsis,
  ellipsisLines = 3,
  selfRef,
  color = "black",
}: ITextProps) => {
  const Tag = tag;

  return (
    <Tag
      ref={selfRef}
      className={`${styles.text} ${classList}`}
      data-align={align}
      data-font-weight={weight}
      data-color={color}
      {...(ellipsis && { "data-ellipsis": true })}
      {...(ellipsis && {
        style: {
          "--ellipsis-lines-count": ellipsisLines,
        } as React.CSSProperties,
      })}
    >
      {text}
    </Tag>
  );
};
