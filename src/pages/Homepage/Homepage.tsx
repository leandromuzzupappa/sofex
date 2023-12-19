import { useState } from "react";
import { Heading } from "@components/Heading/Heading";
import { Text } from "@components/Text/Text";
import { Button } from "@components/Button/Button";
import styles from "./Homepage.module.css";
import { IconNames } from "@data/interfaces/Icons";

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
        text="Conocenos"
        icon={IconNames.LEFTARROW}
        iconPosition="right"
        loading={loading}
        onclick={() => setLoading(!loading)}
        color="teal"
      />
      <br />
      <Button
        text="Conocenos"
        icon={IconNames.LEFTARROW}
        iconPosition="right"
        variant="outlined"
        theme="secondary"
      />
      <br />
      <Button
        text="Conocenos"
        icon={IconNames.RIGHTARROW}
        iconPosition="right"
        variant="filled"
        color="white"
        loading={loading}
      />
      <br />
      <Button
        text="Conocenos"
        icon={IconNames.DOWNARROW}
        iconPosition="left"
        href="#"
        color="teal"
        underline
      />
    </div>
  );
};
