import "./thumbnailcard.css";
interface SelectedDataType {
  name: string;
  position: string;
  clientPhoto: string;
  company: string;
}
interface ThumbnailCardProps {
  data: {
    name: string;
    position: string;
    clientPhoto: string;
    company: string;
  };
  handleClick: (selectedData: SelectedDataType) => void;
  isSelected: boolean;
}

const ThumbnailCard = ({
  data,
  handleClick,
  isSelected,
}: ThumbnailCardProps) => {
  return (
    <div
      className={`thumbnail-card ${isSelected ? "selected" : ""}`}
      onClick={() => handleClick(data)}
    >
      <div className="img">
        <img src={data.clientPhoto} alt={data.name} />
      </div>
      <div className="content">
        <p className="title">{data.name}</p>
        <p className="secondary">
          {data.position} at {data.company}
        </p>
      </div>
    </div>
  );
};

export default ThumbnailCard;
