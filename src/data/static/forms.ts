import * as Yup from "yup";
import { InputTypes } from "@data/types/InputTypes";

export const contactForm = {
  title: "Contact Form",
  fields: [
    {
      name: "nameInput",
      label: "Nombre",
      type: "text" as InputTypes,
      placeholder: "Ingrese su nombre",
      required: true,
      validation: Yup.string()
        .matches(
          /^[A-Za-z\s]+$/,
          "Solo se permiten letras y espacios en el nombre",
        )
        .required("El nombre es requerido"),
    },
    {
      name: "emailInput",
      label: "Email",
      type: "email" as InputTypes,
      placeholder: "Ingrese su email",
      required: true,
      validation: Yup.string()
        .email("Formato de email inválido")
        .required("El email es requerido"),
    },
    {
      name: "cellphoneNumber",
      label: "Teléfono",
      type: "text" as InputTypes,
      placeholder: "Ingrese su teléfono",
      required: false,
      hidden: true,
      validation: Yup.string().matches(
        /^\d+$/,
        "El teléfono debe contener solo números",
      ),
    },
    {
      name: "businessInput",
      label: "Empresa",
      type: "text" as InputTypes,
      placeholder: "Ingrese el nombre de su empresa",
      required: false,
      hidden: true,
      validation: Yup.string().matches(
        /^[A-Za-z\s]+$/,
        "Solo se permiten letras y espacios en el nombre de la empresa",
      ),
    },
    {
      name: "messageInput",
      label: "Mensaje",
      type: "textarea" as InputTypes,
      placeholder: "Escriba su mensaje aquí",
      required: true,
      validation: Yup.string().required("El mensaje es requerido"),
    },
  ],
};
