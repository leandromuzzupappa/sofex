import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@components/Button/Button";
import { IconNames } from "@data/interfaces/Icons";
import styles from "./Form.module.css";
import Input from "@components/Input/Input";
import { contactForm } from "@data/static/forms";

// Definir un tipo para las validaciones de formulario
type FormValidationSchema = {
  [key: string]: Yup.StringSchema;
};

export const Form = () => {
  // Construir el esquema de validación del formulario
  const validationSchema: FormValidationSchema = contactForm.fields.reduce(
    (acc, field) => {
      acc[field.name] = field.validation;
      return acc;
    },
    {} as FormValidationSchema,
  );

  const formik = useFormik({
    initialValues: Object.fromEntries(
      contactForm.fields.map((field) => [field.name, ""]),
    ),
    validationSchema: Yup.object().shape(validationSchema),
    onSubmit: (values) => {
      // Handle form submission here
      console.log("Form submitted:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.formWrapper}>
      <div className={styles.inputs}>
        {contactForm.fields.map((field, index) => (
          <Input
            key={index}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            label={field.label}
            required={field.required}
            hidden={field.hidden}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[field.name]}
            error={
              formik.touched[field.name] &&
              (formik.errors[field.name] as string)
            }
          />
        ))}
      </div>
      <div className="actionButtons">
        <Button
          type="submit"
          text="Enviar"
          theme="primary"
          variant="filled"
          shape="rounded"
          icon={IconNames.RIGHTARROW}
          iconPosition="right"
          classList={styles.formButton}
          disabled={!formik.isValid}
        />
      </div>
      <p className={styles.disclaimer}>* Campos Obligatorios</p>
    </form>
  );
};

export default Form;
