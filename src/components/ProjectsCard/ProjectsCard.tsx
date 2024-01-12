import { Button } from "@components/Button/Button";
import { Text } from "@components/Text/Text";
import { IconNames } from "@data/interfaces/Icons";

const ProjectsCard = () => {
  return (
    <article>
      <div className="infoWrapper">
        <Text
          text={"EcoMarket"}
          align={"left"}
          classList={"title"}
          color={"black"}
        />
        <Text
          text={
            "Plataforma de comercio electrónico dedicada a la venta de productos ecológicos y sostenibles. Los usuarios pueden explorar y comprar una amplia gama de productos amigables con el medio ambiente."
          }
          align={"left"}
          classList={"title"}
          color={"black"}
        />
        <div className="actionButtons">
          <Button
            text={"Ver el trabajo"}
            color={"black"}
            icon={IconNames.RIGHTARROW}
            iconPosition={"right"}
            variant={"filled"}
          />
          <Button text={"Mas info"} color={"black"} variant={"outlined"} />
        </div>
      </div>
      <div className="imageWrapper">
        <img
          src="https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
          alt=""
        />
      </div>
    </article>
  );
};
export default ProjectsCard;

/* { projectTitle, projectDescription, projectUrl, projectInfoUrl } */
