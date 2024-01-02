import { useState } from "react";
import { Button } from "@components/Button/Button";
import { Logo } from "@components/Logo/Logo";
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
  const [active, setActive] = useState("");

  const handleActiveItem = (itemName: string) => {
    setActive(itemName);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <nav className={styles.nav}>
          <ul>
            {headerSections.map((section) => (
              <li key={section.label} className={styles.navItem}>
                <Button
                  classList={`${styles.navItemButton} ${
                    active === section.label ? styles.navItemActive : ""
                  }`}
                  text={section.label}
                  href={section.to}
                  underline
                  onclick={() => handleActiveItem(section.label)}
                />
              </li>
            ))}
            <li>
              <Button
                classList={styles.contactButton}
                text="Contacto"
                href="#contacto"
                variant="filled"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
