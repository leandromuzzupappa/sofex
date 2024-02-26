import { IInputProps } from "@data/interfaces/Input";
import styles from "./Input.module.css";

const Input = ({
  name,
  type,
  placeholder,
  label,
  required,
  hidden,
  onChange,
  onBlur,
  value,
  error,
}: IInputProps & {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  error?: string | boolean | undefined; // Permitir booleanos como parte de la interfaz
}) => {
  return (
    <>
      {type !== "textarea" ? (
        <>
          <div
            className={`${styles.inputItems} ${hidden ? styles.hiddenOnMobile : ""}`}
          >
            <label htmlFor={name} className={styles.label}>
              {label} {required ? "*" : " "}
            </label>
            <input
              type={type}
              name={name}
              id={name}
              placeholder={placeholder}
              required={required}
              className={`${styles.input} ${error ? styles.error : ""}`}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
            {error && (
              <div className={styles.errorMessage}>
                <p>{error}</p>
              </div>
            )}
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
            className={`${styles.textarea} ${error ? styles.error : ""}`}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          ></textarea>
          {error && (
            <div className={styles.errorMessage}>
              <p>{error}</p>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default Input;
