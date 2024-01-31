import { useEffect, useState } from "react";
import { Icon } from "@components/Icon/Icon";
import { Text } from "@components/Text/Text";
import styles from "./Logo.module.css";
import { IconNames } from "@data/interfaces/Icons";

interface ILogoProps {
  classList?: string;
  selfRef?: React.RefObject<HTMLSpanElement & HTMLAnchorElement>;
}

export const Logo = ({ classList, selfRef }: ILogoProps) => {
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHomepage(true);
    }
  }, []);

  const renderLogo = () => {
    return (
      <span ref={selfRef} className={classList || ""}>
        <Icon name={IconNames.SOFEXSLOGO} classList={styles.logo} />
        <Text text="Sofexs logo" classList={styles.logoText} />
      </span>
    );
  };

  return (
    <>
      {isHomepage ? (
        renderLogo()
      ) : (
        <a ref={selfRef} href="/" className={`${styles.logoLink} ${classList}`}>
          {renderLogo()}
        </a>
      )}
    </>
  );
};
