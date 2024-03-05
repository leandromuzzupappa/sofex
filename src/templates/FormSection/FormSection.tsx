import ContactInfo from "@components/ContactInfo/ContactInfo";
import Form from "@components/Form/Form";
import styles from "./FormSection.module.css";
import Toast from "@components/Toast/Toast";
import { useState } from "react";
const FormSection = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const handleToastVisibility = (visible: boolean) => {
    setShowToast(visible);
  };
  const handleToastShow = (message: string, error: boolean) => {
    setMessage(message);
    setError(error);
    setShowToast(true);
  };
  return (
    <div className={styles.formSection}>
      <ContactInfo />
      <Form onToastShow={handleToastShow} />
      <Toast
        text={message}
        error={error}
        showToasty={showToast}
        onToastClose={handleToastVisibility}
      />
    </div>
  );
};
export default FormSection;
