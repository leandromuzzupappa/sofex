import { IThumbnailCard } from "@data/interfaces/Card";
import "./thumbnailcard.css";

const ThumbnailCard = ({
  name,
  position,
  clientPhoto,
  company,
  handleClick,
  isSelected,
}: IThumbnailCard) => {
  return (
    <button
      className={`thumbnail-card ${isSelected ? "selected" : ""}`}
      onClick={() => handleClick({ name, clientPhoto, position, company })}
    >
      <header className="img">
        <img src={clientPhoto} alt={name} />
      </header>
      <main className="content">
        <h1 className="title">{name}</h1>
        <p className="secondary">
          {position} at {company}
        </p>
      </main>
    </button>
  );
};

export default ThumbnailCard;
