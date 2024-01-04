import { ICardDetails } from "@data/interfaces/Card";
import "./card-details.css";
const CardDetails = ({
  logo,
  company,
  quote,
  feedback,
  name,
  position,
}: ICardDetails) => {
  return (
    <div className="card-details">
      <div className="img">
        <img src={logo} alt={company} />
      </div>
      <div className="content">
        <div className="row">
          <p className="quote">"{quote}"</p>
          <p className="secondary">{feedback}</p>
        </div>
        <div className="row client-info">
          <p className="title">{name}</p>
          <p className="secondary">
            {position} at {company}
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardDetails;
