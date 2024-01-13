import { Button } from "@components/Button/Button";
import { Text } from "@components/Text/Text";
import { IconNames } from "@data/interfaces/Icons";
import styles from "./ProjectsCard.module.css";
import { IProjectsCardProps } from "@data/interfaces/Card";
const ProjectsCard = ({
  projectTitle,
  projectDescription,
  projectUrl,
  projectInfoUrl,
  cardOrientation,
}: IProjectsCardProps) => {
  return (
    <article className={styles.projectsCard}>
      <div
        className={`${styles.cardContainer} ${
          cardOrientation === "reversed" ? styles.reversed : styles.normal
        }`}
      >
        <div className={styles.infoWrapper}>
          <Text
            text={projectTitle}
            align={"left"}
            classList={styles.title}
            color={"black"}
            weight={"bold"}
          />
          <Text
            text={projectDescription}
            align={"left"}
            classList={styles.secondary}
            color={"black"}
          />
          <div className={styles.actionButtons}>
            <Button
              text={"Ver el trabajo"}
              color={"black"}
              icon={IconNames.RIGHTARROW}
              iconPosition={"right"}
              href={projectUrl}
              variant={"filled"}
              classList={styles.btnPrimary}
            />
            <Button
              text={"Mas info"}
              color={"black"}
              href={projectInfoUrl}
              variant={"outlined"}
              classList={styles.btnSecondary}
            />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src="https://cdn.thewirecutter.com/wp-content/media/2022/10/laptopstopicpage-2048px-2102-2x1-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200"
            alt=""
          />
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;

/*  */
