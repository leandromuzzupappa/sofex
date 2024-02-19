import { Button } from "@components/Button/Button";
import { IconNames } from "@data/interfaces/Icons";
import styles from "./Form.module.css";
export const Form = () => {
  return (
    <div className="formContainer">
      <form action="POST" className={styles.formWrapper}>
        <div className="formInput">
          <label htmlFor="nameInput">Nombre *</label>
          <input type="text" name="nameInput" placeholder="John Doe" required />
        </div>
        <div className="formInput">
          <label htmlFor="emailInput">Email *</label>
          <input
            type="email"
            name="emailInput"
            placeholder="JohnDoe@example.com"
            required
          />
        </div>
        <div className="formInput">
          <label htmlFor="cellphoneNumber">Teléfono</label>
          <input
            type="text"
            name="cellphoneNumber"
            placeholder="(123) 456-7890"
          />
        </div>
        <div className="formInput">
          <label htmlFor="nameInput">Empresa</label>
          <input type="text" name="businessInput" placeholder="Tu Empresa" />
        </div>
        <div className="formInput">
          <label htmlFor="nameInput">Mensaje</label>
          <textarea name="messageInput" placeholder="Tu Mensaje" required />
        </div>
        <div className="actionButtons">
          <Button
            text="Enviar"
            theme={"primary"}
            variant={"filled"}
            shape={"rounded"}
            icon={IconNames.RIGHTARROW}
            iconPosition={"right"}
            classList={"formButton"}
          />
        </div>
      </form>
    </div>
  );
};
export default Form;
