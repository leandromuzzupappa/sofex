import ContactInfo from "@components/ContactInfo/ContactInfo";
import Form from "@components/Form/Form";
import styles from "./FormSection.module.css";
const FormSection = () => {
  return (
    <div className={styles.formSection}>
      <ContactInfo />
      <Form />
    </div>
  );
};
export default FormSection;
