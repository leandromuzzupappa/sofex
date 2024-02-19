import { IInputProps } from "@data/interfaces/Input";

const Input = ({ name, type, placeholder, label, required }: IInputProps) => {
  return (
    <>
      <label htmlFor={name}>
        {label} {required ? "*" : " "}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};
export default Input;
