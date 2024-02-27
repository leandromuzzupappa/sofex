export interface IToastProps {
  text: string;
  error?: boolean;
  showToasty: boolean;
  onToastClose: (isOpen: boolean) => void;
}
