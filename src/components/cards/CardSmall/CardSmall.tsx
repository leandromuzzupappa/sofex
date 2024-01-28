import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { Heading } from "@components/Heading/Heading";
import { Text } from "@components/Text/Text";
import { Icon } from "@components/Icon/Icon";
import { Button } from "@components/Button/Button";
import { useBreakpoints } from "@hooks/useBreakpoint";
import styles from "./CardSmall.module.css";
import { ICardSmallProps } from "@data/interfaces/Cards";

gsap.registerPlugin(SplitText);

export const CardSmall = ({
  classList = "",
  color = "teal",
  description,
  ellipsis = false,
  ellipsisLines = 3,
  ellipsisButtonText = "Ver más",
  headline,
  icon,
  iconPosition,
}: ICardSmallProps) => {
  const breakpoints = useBreakpoints();

  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const [showButton, setShowButton] = useState(true);
  const [showEllipsis, setShowEllipsis] = useState(ellipsis);
  const [textHeights, setTextHeights] = useState<{ [key: string]: number }>({
    full: 0,
    ellipsis: 0,
  });

  useLayoutEffect(() => {
    const text = textRef.current;
    if (!ellipsis || !text) return;

    new SplitText(text, {
      type: "lines",
      linesClass: styles.line,
    });

    const ellipsisHeight = text.offsetHeight;
    const lines = text.children as HTMLCollectionOf<HTMLDivElement>;
    const childrenHeight = Array.from(lines).reduce(
      (acc, line) => acc + line.offsetHeight,
      0,
    );

    setTextHeights({ full: childrenHeight, ellipsis: ellipsisHeight });
    if (lines.length <= ellipsisLines) setShowButton(false);
  }, [ellipsis, ellipsisLines, breakpoints]);

  const onToggleEllipsis = (_ellipsis: boolean) => {
    setShowEllipsis(_ellipsis);

    const tl = gsap.timeline({ paused: true, defaults: { duration: 0.5 } });
    const text = textRef.current;
    if (!ellipsis || !text || !textHeights.ellipsis || !textHeights.full)
      return;

    if (_ellipsis) {
      tl.fromTo(
        text,
        {
          height: textHeights.full,
        },
        {
          height: textHeights.ellipsis,
        },
      );
    } else {
      tl.fromTo(
        text,
        {
          height: textHeights.ellipsis,
        },
        {
          height: textHeights.full,
        },
      );
    }
    tl.play();
  };

  return (
    <article
      className={`${styles.card} ${classList}`}
      data-color={color}
      data-icon={iconPosition}
    >
      <Icon name={icon!} classList={styles.icon} />
      <Heading
        level={3}
        classList={styles.headline}
        text={headline}
        font="changa"
      />
      <Text
        selfRef={textRef}
        text={description}
        classList={styles.text}
        ellipsis={showEllipsis}
        ellipsisLines={ellipsisLines}
        ellipsisButtonText={ellipsisButtonText}
      />

      {showButton && (
        <Button
          selfRef={buttonRef}
          classList={styles.button}
          color={color}
          text={showEllipsis ? ellipsisButtonText : "Leer menos"}
          onclick={() => onToggleEllipsis(!showEllipsis)}
          underline
        />
      )}
    </article>
  );
};
