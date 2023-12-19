import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Icon } from "@components/Icon/Icon";
import styles from "./Button.module.css";
import { IconNames } from "@data/interfaces/Icons";

interface IButtonProps {
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

export const Button = ({
  block = false,
  classList = "",
  color = "black",
  disabled,
  href,
  icon,
  iconPosition = "left",
  iconClassList,
  loading,
  shape = "rounded",
  text,
  theme = "primary",
  underline,
  variant = "",
  onclick,
}: IButtonProps): React.ReactElement<IButtonProps> => {
  const Tag = href ? "a" : "button";
  const loadingRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ paused: true });

    if (loading) {
      if (iconRef.current) {
        tl.to(iconRef.current, {
          autoAlpha: 0,
          scale: 0,
          display: "none",
          duration: 0.2,
          ease: "expo.out",
        });
      }

      tl.to(
        loadingRef.current,
        {
          autoAlpha: 1,
          display: "block",
          duration: 0.2,
          ease: "power4.inOut",
        },
        "-=.2",
      );
    } else {
      tl.to(loadingRef.current, {
        autoAlpha: 0,
        display: "none",
        duration: 0.2,
        ease: "power3.inOut",
      });

      if (iconRef.current) {
        tl.to(
          iconRef.current,
          {
            autoAlpha: 1,
            scale: 1,
            display: "block",
            duration: 0.2,
            ease: "expo.out",
          },
          "-=0.2",
        );
      }
    }

    tl.play();

    return () => {
      tl.kill();
    };
  }, [loading]);

  const renderIcon = () => {
    return <Icon selfRef={iconRef} name={icon!} classList={iconClassList} />;
  };

  const renderLoading = () => {
    return <div ref={loadingRef} className={styles.spinner}></div>;
  };

  return (
    <Tag
      className={`${styles.button} ${classList}`}
      disabled={disabled}
      data-color={color}
      data-shape={shape}
      data-theme={theme}
      data-variant={variant}
      {...(block && { "data-block": true })}
      {...(loading && { "data-loading": true })}
      {...(underline && { "data-underline": true })}
      {...(href && { href })}
      onClick={onclick}
    >
      {icon && iconPosition === "left" && renderIcon()}
      <span>
        {renderLoading()}
        {text}
      </span>
      {icon && iconPosition === "right" && renderIcon()}
    </Tag>
  );
};
