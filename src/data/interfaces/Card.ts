interface SelectedDataType {
  name: string;
  position: string;
  clientPhoto: string;
  company: string;
}
export interface IThumbnailCard {
  name: string;
  position: string;
  clientPhoto: string;
  company: string;
  handleClick: ({ ...selectedData }: SelectedDataType) => void;
  isSelected: boolean;
}
export interface ICardDetails {
  logo: string;
  company: string;
  quote: string;
  feedback: string;
  name: string;
  position: string;
}
