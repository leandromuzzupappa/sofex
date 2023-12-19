import "./card-details.css";
interface CardDetailsProps {
  data: {
    logo: string;
    company: string;
    quote: string;
    feedback: string;
    name: string;
    position: string;
  };
}
const CardDetails = ({ data }: CardDetailsProps) => {
  return (
    <div className="card-details">
      <div className="img">
        <img src={data.logo} alt={data.company} />
      </div>
      <div className="content">
        <p className="quote">"{data.quote}"</p>
        <p className="secondary">{data.feedback}</p>
        <p className="title">{data.name}</p>
        <p className="secondary">
          {data.position} at {data.company}
        </p>
      </div>
    </div>
  );
};
export default CardDetails;
