import { Heading } from "@components/Heading/Heading";
import styles from "./Homepage.module.css";

export const Homepage = () => {
  return (
    <div>
      <Heading text="Sofexs" level={1} font="changa" classList={styles.title} />
    </div>
  );
};
