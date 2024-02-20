import { Button } from "@components/Button/Button";
import { IconNames } from "@data/interfaces/Icons";
import styles from "./Form.module.css";
import Input from "@components/Input/Input";
export const Form = () => {
  return (
    <form action="POST" className={styles.formWrapper}>
      <div className={styles.inputs}>
        <Input
          type={"text"}
          name={"nameInput"}
          placeholder={"Nombre Apellido"}
          label={"Nombre"}
          required={true}
        />
        <Input
          type={"email"}
          name={"emailInput"}
          placeholder={"tucorreo@example.com"}
          label={"Email"}
          required={true}
        />
        <Input
          type={"text"}
          name={"cellphoneNumber"}
          placeholder={"(123) 456-7890"}
          label={"Teléfono"}
          required={false}
        />
        <Input
          type={"text"}
          name={"businessInput"}
          placeholder={"Tu empresa"}
          label={"Empresa"}
          required={false}
        />
      </div>
      <div className={styles.messageInput}>
        <Input
          type={"textarea"}
          name={"messageInput"}
          placeholder={"Tu mensaje"}
          label={"Mensaje"}
          required={true}
        />
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
