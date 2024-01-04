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
    <article className="card-details">
      <header className="img">
        <img src={logo} alt={company} />
      </header>
      <main className="content">
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
      </main>
    </article>
  );
};
export default CardDetails;
