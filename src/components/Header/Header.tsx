import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
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
  const menuRef = useRef<HTMLDivElement>(null);

  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const menuItems = menu.children[0].firstChild?.childNodes;

    gsap.to(menu, {
      autoAlpha: open ? 1 : 0,
      display: open ? "grid" : "none",
      duration: 0.5,
      ease: "power3.inOut",
    });

    gsap.fromTo(
      [...(menuItems || [])],
      {
        x: open ? -100 : 0,
        opacity: open ? 0 : 1,
      },
      {
        autoAlpha: open ? 1 : 0,
        x: open ? 0 : -100,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.1,
      },
    );
  }, [open]);

  const handleActiveItem = (itemName: string) => {
    setActive(itemName);
    setOpen(false);
  };

  const renderNav = (classList: string) => {
    return (
      <nav className={`${styles.nav} ${classList}`}>
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
              block
              onclick={() => handleActiveItem("contacto")}
            />
          </li>
        </ul>
      </nav>
    );
  };

  const renderMobileBtn = () => (
    <button
      className={styles.mobileBtn}
      data-open={open}
      onClick={() => setOpen(!open)}
    >
      <span data-pos="top"></span>
      <span data-pos="center1"></span>
      <span data-pos="center2"></span>
      <span data-pos="bottom"></span>
    </button>
  );

  const renderMobileMenu = () => (
    <div ref={menuRef} className={styles.mobileMenu}>
      {renderNav(styles.mobileNav)}
    </div>
  );

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {renderMobileBtn()}
        {renderMobileMenu()}
        <span className={styles.logo}>
          <Logo />
        </span>
        {renderNav(styles.desktopNav)}
      </div>
    </header>
  );
};
