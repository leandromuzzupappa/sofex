import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Heading } from "@components/Heading/Heading";
import { Button } from "@components/Button/Button";
import styles from "./Hero.module.css";
import { IconNames } from "@data/interfaces/Icons";

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const button = buttonRef.current;
    const blob = blobRef.current;

    if (!title || !button || !blob) return;

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "back.out(1.7)",
      },
      paused: true,
    });

    tl.fromTo(
      title,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.2,
      },
    );

    tl.fromTo(
      button,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      },
      "-=.3",
    );

    tl.fromTo(
      blob,
      {
        x: 100,
        y: -100,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
      },
      0,
    );

    tl.play();
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <Heading
          selfRef={titleRef}
          text="Construye tu negocio \n con nosotros"
          level={1}
          classList={styles.title}
        />
        <Button
          selfRef={buttonRef}
          text="Conocenos"
          color="black"
          variant="outlined"
          href="#"
          icon={IconNames.DOWNARROW}
          iconPosition="right"
          classList={styles.button}
        />
      </div>

      <div ref={blobRef} className={styles.blobWrapper}></div>
    </section>
  );
};
