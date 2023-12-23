import { useState } from "react";
import { Heading } from "@components/Heading/Heading";
import { Text } from "@components/Text/Text";
import { Button } from "@components/Button/Button";
import { CardSmall } from "@components/cards/CardSmall/CardSmall";
import styles from "./Homepage.module.css";
import { IconNames } from "@data/interfaces/Icons";
import { aboutData } from "@data/static/about";

export const Homepage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Heading text="Sofexs" level={1} font="changa" classList={styles.title} />
      <Text
        text="Construye tu negocio con nosotros"
        align="center"
        classList={styles.description}
      />
      <Button
        text="Ver todos los trabajos"
        loading={loading}
        onclick={() => setLoading(!loading)}
        color="green"
        variant="outlined"
        icon={IconNames.RIGHTARROW}
        iconPosition="right"
        theme="secondary"
      />

      <section className={styles.aboutSection}>
        <div className={styles.aboutList}>
          {aboutData.map((item, index) => (
            <CardSmall
              key={index}
              headline={item.headline}
              icon={IconNames[item.icon as keyof typeof IconNames]}
              description={item.text}
              ellipsis
              ellipsisLines={8}
              ellipsisButtonText="Leer más"
            />
          ))}
        </div>
      </section>
    </div>
  );
};
