import { Button } from "@components/Button/Button";
import { Heading } from "@components/Heading/Heading";
import styles from "./Header.module.css";

const headerSections = [
  {
    label: "Servicios",
    to: "#servicios",
  },
  {
    label: "Portfolio",
    to: "#portfolio",
  },
  {
    label: "Clientes",
    to: "#clientes",
  },
  {
    label: "Nosotros",
    to: "#nosotros",
  },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <Heading text="Sofexs" level={1} font="changa" classList={styles.title} />
      <nav className={styles.nav}>
        <ul>
          {headerSections.map((section) => (
            <li key={section.label} className={styles.navItem}>
              <Button
                classList={styles.button}
                text={section.label}
                href={section.to}
                underline
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
