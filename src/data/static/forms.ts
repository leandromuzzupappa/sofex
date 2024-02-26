import { InputTypes } from "@data/types/InputTypes";
import * as Yup from "yup";

export const contactForm = {
  title: "Contact Form",
  fields: [
    {
      name: "nameInput",
      label: "Nombre",
      type: "text" as InputTypes,
      validation: Yup.string().required("El nombre es requerido"),
    },
    {
      name: "emailInput",
      label: "Email",
      type: "email" as InputTypes,
      validation: Yup.string()
        .email("Formato de email inválido")
        .required("El email es requerido"),
    },
    {
      name: "messageInput",
      label: "Mensaje",
      type: "textarea" as InputTypes,
      validation: Yup.string().required("El mensaje es requerido"),
    },
  ],
};
