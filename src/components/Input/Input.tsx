import { IInputProps } from "@data/interfaces/Input";
import styles from "./Input.module.css";

const Input = ({ name, type, placeholder, label, required }: IInputProps) => {
  return (
    <>
      {type != "textarea" ? (
        <>
          <div className={styles.inputItems}>
            <label htmlFor={name} className={styles.label}>
              {label} {required ? "*" : " "}
            </label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              required={required}
              className={styles.input}
            />
          </div>
        </>
      ) : (
        <>
          <label htmlFor={name} className={styles.label}>
            {label} {required ? "*" : " "}
          </label>
          <textarea
            name={name}
            id={name}
            cols={30}
            rows={5}
            className={styles.textarea}
          ></textarea>
        </>
      )}
    </>
  );
};
export default Input;
