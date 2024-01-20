import { useEffect, useState } from "react";
import { Icon } from "@components/Icon/Icon";
import { Text } from "@components/Text/Text";
import styles from "./Logo.module.css";
import { IconNames } from "@data/interfaces/Icons";

export const Logo = () => {
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHomepage(true);
    }
  }, []);

  const renderLogo = () => {
    return (
      <>
        <Icon name={IconNames.SOFEXSLOGO} classList={styles.logo} />
        <Text text="Sofexs logo" classList={styles.logoText} />
      </>
    );
  };

  return (
    <>
      {isHomepage ? (
        renderLogo()
      ) : (
        <a href="/" className={styles.logoLink}>
          {renderLogo()}
        </a>
      )}
    </>
  );
};
