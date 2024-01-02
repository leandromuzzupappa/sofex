import { useEffect, useState } from "react";
import { Heading } from "@components/Heading/Heading";
import styles from "./Logo.module.css";

export const Logo = () => {
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHomepage(true);
    }
  }, []);

  const renderLogo = () => (
    <Heading
      text="Sofexs"
      level={1}
      font="changa"
      classList={`${styles.logo} ${!isHomepage ? styles.logoLink : ""}`}
    />
  );

  return <>{isHomepage ? renderLogo() : <a href="/">{renderLogo()}</a>}</>;
};
