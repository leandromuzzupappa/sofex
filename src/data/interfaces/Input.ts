import { InputTypes } from "@data/types/InputTypes";

export interface IInputProps {
  name: string;
  type: InputTypes;
  placeholder: string;
  label: string;
  required: boolean;
}
