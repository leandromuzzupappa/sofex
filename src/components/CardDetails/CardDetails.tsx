import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Text } from "@components/Text/Text";
import styles from "./CardDetails.module.css";
import { ICardDetails } from "@data/interfaces/Card";
export const CardDetails = ({
  logo,
  company,
  quote,
  feedback,
  name,
  position,
}: ICardDetails) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const positionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      paused: true,
    });

    tl.fromTo(
      imgRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5 },
    );
    tl.fromTo(
      [
        quoteRef.current,
        descriptionRef.current,
        titleRef.current,
        positionRef.current,
      ],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
      "-=0.3",
    );

    tl.play();

    return () => {
      tl.kill();
    };
  }, [logo]);

  return (
    <article ref={cardRef} className={styles.cardDetails}>
      <header
        className={styles.imgWrapper}
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "2000px",
        }}
      >
        <img ref={imgRef} src={logo} alt={company} />
      </header>
      <main className={styles.content}>
        <blockquote ref={quoteRef} className={styles.quote}>
          &quot;{quote}&quot;
        </blockquote>
        <Text
          selfRef={descriptionRef}
          text={feedback}
          weight={"regular"}
          classList={styles.text}
        />
        <div className={styles.clientInfo}>
          <Text
            selfRef={titleRef}
            text={name}
            weight={"bold"}
            classList={styles.title}
          />
          <Text
            selfRef={positionRef}
            text={`${position} at ${company}`}
            classList={styles.secondary}
          />
        </div>
      </main>
    </article>
  );
};
export default CardDetails;
