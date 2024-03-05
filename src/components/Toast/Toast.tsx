import { useState, useEffect } from "react";
import { IToastProps } from "@data/interfaces/Toast";
import styles from "./Toast.module.css";
import { Text } from "@components/Text/Text";

const Toast = ({ text, error, showToasty, onToastClose }: IToastProps) => {
  const toastyClass = error
    ? styles.toastyError
    : !error
      ? styles.toastySuccess
      : "";
  const [visible, setVisible] = useState(showToasty);
  const toastyVisible = visible ? styles.visible : styles.hidden;
  const handleCloseToast = () => {
    setVisible(false);
    onToastClose(false);
  };
  useEffect(() => {
    if (showToasty) {
      // Muestra el Toast si showToasty es verdadero
      setVisible(true);
      const timer = setTimeout(() => {
        handleCloseToast();
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showToasty]);
  return (
    <div
      className={`${styles.toasty} ${toastyClass} ${toastyVisible}`}
      onClick={handleCloseToast}
    >
      <Text text={text} weight={"bold"} classList={styles.subtitle} />
    </div>
  );
};
export default Toast;
