import { Button } from "@components/Button/Button";
import { IconNames } from "@data/interfaces/Icons";
import styles from "./Form.module.css";
import Input from "@components/Input/Input";
import { contactForm } from "@data/static/forms";
export const Form = () => {
  return (
    <form action="POST" className={styles.formWrapper}>
      <div className={styles.inputs}>
        {contactForm ? (
          <>
            {contactForm.fields.map((field, index) => (
              <Input
                key={index}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                label={field.label}
                required={field.required}
                hidden={
                  field.name == "cellphoneNumber" ||
                  field.name == "businessInput"
                    ? false
                    : true
                }
              />
            ))}
          </>
        ) : null}
      </div>
      <div className="actionButtons">
        <Button
          text="Enviar"
          theme={"primary"}
          variant={"filled"}
          shape={"rounded"}
          icon={IconNames.RIGHTARROW}
          iconPosition={"right"}
          classList={styles.formButton}
        />
      </div>
      <p className={styles.disclaimer}>* Campos Obligatorios</p>
    </form>
  );
};
export default Form;
