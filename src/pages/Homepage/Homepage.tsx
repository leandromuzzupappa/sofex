import { Heading } from "@components/Heading/Heading";
import { Text } from "@components/Text/Text";
import styles from "./Homepage.module.css";

export const Homepage = () => {
  return (
    <div>
      <Heading text="Sofexs" level={1} font="changa" classList={styles.title} />
      <Text
        text="Construye tu negocio con nosotros"
        align="center"
        classList={styles.description}
      />
    </div>
  );
};
