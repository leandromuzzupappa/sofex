import { useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { Icon } from "@components/Icon/Icon";
import styles from "./Button.module.css";
import { IButtonProps } from "@data/interfaces/Button";

interface ILoadingConfig {
  tl: gsap.core.Timeline;
  loadingRef: HTMLDivElement | null;
  iconRef: HTMLSpanElement | null;
}

export const Button = ({
  block = false,
  classList = "",
  color = "black",
  disabled,
  href,
  icon,
  iconPosition = "left",
  iconClassList = "",
  loading,
  shape = "rounded",
  text,
  theme = "primary",
  underline,
  variant = "",
  selfRef,
  onclick,
}: IButtonProps): React.ReactElement<IButtonProps> => {
  const Tag = href ? "a" : "button";
  const loadingRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({ paused: true });

    const loading = loadingRef.current;
    const icon = iconRef.current;

    const config = {
      tl,
      loadingRef: loading || null,
      iconRef: icon || null,
    };

    loading ? handleLoading(config) : handleLoadingReverse(config);

    tl.play();

    return () => {
      tl.kill();
    };
  }, [loading]);

  useEffect(() => {
    const underline = underlineRef.current;
    const underlineTl = gsap.timeline({ paused: true });

    if (!underline) return;
    const parent = underline.parentElement as
      | HTMLAnchorElement
      | HTMLButtonElement;

    underlineTl.fromTo(
      underline,
      {
        width: "0%",
        left: "0%",
        opacity: 0,
      },
      {
        width: "100%",
        opacity: 1,
        duration: 0.5,
        ease: "expo.out",
      },
    );
    underlineTl.addLabel("reverse");
    underlineTl.fromTo(
      underline,
      {
        width: "100%",
        left: "0%",
      },
      {
        width: "0%",
        left: "100%",
        background: "red",
        duration: 0.3,
        ease: "expo.out",
      },
    );

    const handleEnter = () => {
      underlineTl.tweenFromTo(0, "reverse");
    };

    const handleLeave = () => {
      underlineTl.play();
    };

    parent?.addEventListener("mouseenter", () => handleEnter());
    parent?.addEventListener("mouseleave", () => handleLeave());

    return () => {
      if (underline) {
        parent?.removeEventListener("mouseenter", () => handleEnter());
        parent?.removeEventListener("mouseleave", () => handleLeave());
      }
    };
  }, []);

  const handleLoading = ({ tl, loadingRef, iconRef }: ILoadingConfig) => {
    if (iconRef)
      tl.to(iconRef, {
        autoAlpha: 0,
        scale: 0,
        display: "none",
        duration: 0.2,
        ease: "expo.out",
      });

    if (loadingRef)
      tl.to(
        loadingRef,
        {
          autoAlpha: 1,
          display: "block",
          duration: 0.2,
          ease: "power4.inOut",
        },
        "-=.2",
      );
  };

  const handleLoadingReverse = ({
    tl,
    loadingRef,
    iconRef,
  }: ILoadingConfig) => {
    if (loadingRef)
      tl.to(
        loadingRef,
        {
          autoAlpha: 0,
          display: "none",
          duration: 0.2,
          ease: "power4.inOut",
        },
        "-=.2",
      );

    if (iconRef)
      tl.to(iconRef, {
        autoAlpha: 1,
        scale: 1,
        display: "inline-block",
        duration: 0.2,
        ease: "expo.out",
      });
  };

  const renderIcon = () => {
    return (
      <Icon
        selfRef={iconRef}
        name={icon!}
        classList={`${styles.buttonIcon} ${iconClassList}`}
      />
    );
  };

  const renderLoading = () => {
    return <div ref={loadingRef} className={styles.spinner}></div>;
  };

  const renderUnderline = () => {
    return <div ref={underlineRef} className={styles.underline}></div>;
  };

  return (
    <Tag
      ref={selfRef as React.RefObject<HTMLButtonElement & HTMLAnchorElement>}
      className={`${classList} ${styles.button}`}
      data-color={color}
      data-shape={shape}
      data-theme={theme}
      data-variant={variant}
      {...(disabled && { disabled: true })}
      {...(block && { "data-block": true })}
      {...(loading && { "data-loading": true })}
      {...(underline && { "data-underline": true })}
      {...(icon && { "data-icon-position": iconPosition })}
      {...(href && { href })}
      onClick={onclick}
    >
      {icon && iconPosition === "left" && renderIcon()}
      {loading && renderLoading()}
      {text}
      {icon && iconPosition === "right" && renderIcon()}
      {underline && renderUnderline()}
    </Tag>
  );
};
