import { Heading } from "@components/Heading/Heading";
import { Text } from "@components/Text/Text";
import { Button } from "@components/Button/Button";
import styles from "./Homepage.module.css";
import arrow from "@assets/images/arrow.svg";

export const Homepage = () => {
  return (
    <div>
      <Heading text="Sofexs" level={1} font="changa" classList={styles.title} />
      <Text
        text="Construye tu negocio con nosotros"
        align="center"
        classList={styles.description}
      />
      <Button text="Conocenos" icon={arrow} iconPosition="right" href="#" />
      <br />
      <Button
        text="Conocenos"
        icon={arrow}
        iconPosition="right"
        variant="outlined"
        theme="secondary"
      />
      <br />
      <Button
        text="Conocenos"
        icon={arrow}
        iconPosition="right"
        variant="filled"
        color="white"
      />
      <br />
      <Button
        text="Conocenos"
        icon={arrow}
        iconPosition="left"
        href="#"
        color="teal"
        underline
      />
    </div>
  );
};
