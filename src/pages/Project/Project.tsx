import { Heading } from "@components/Heading/Heading";
import { Text } from "@components/Text/Text";
import styles from "./Project.module.css";
import { ITechnologiesData } from "@data/static/projects";
import { CardSmall } from "@components/cards/CardSmall/CardSmall";
import { IconNames } from "@data/interfaces/Icons";
import CardLarge from "@components/cards/CardLarge/CardLarge";

export interface IProjectProps {
  name: string;
  description: string;
  shortDescription: string;
  process: IProcess[];
  stack: IStack[];
  media1: IMedia;
  media2: IMedia;
}

export interface IProcess {
  headline: string;
  description: string;
  icon: string;
}

export interface IStack extends ITechnologiesData {}

export interface IMedia {
  type: "image" | "video";
  url: string;
  alt: string;
}

export const Project = ({
  name,
  description,
  shortDescription,
  process,
  stack,
  media1,
  media2,
}: IProjectProps) => {
  const renderRectangle = (variant: string) => {
    return <div className={styles.rectangle} data-rectangle={variant}></div>;
  };

  const renderIntro = () => {
    return (
      <div className={`${styles.wrapper} ${styles.intro}`}>
        <Text
          text={description}
          classList={styles.description}
          weight="regular"
        />

        {media1.url && media1.type === "image" && (
          <img className={styles.media} src={media1.url} alt={media1.alt} />
        )}
      </div>
    );
  };

  const renderProcess = () => {
    return (
      <div className={`${styles.wrapper} ${styles.process}`}>
        <Heading
          text="Nuestro proceso"
          level={2}
          classList={styles.title}
          font="changa"
          weight="regular"
        />
        <ul>
          {process.map((step, index) => (
            <li key={index} className={styles.step}>
              <CardSmall
                classList={styles.card}
                headline={index + 1 + ". " + step.headline}
                icon={IconNames["ACCESSIBILITY" as keyof typeof IconNames]}
                description={step.description}
                ellipsis
                ellipsisLines={10}
                color="black"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderStack = () => {
    return (
      <div className={`${styles.wrapper} ${styles.stack}`}>
        <Heading
          text="Tecnologías utilizadas"
          level={2}
          classList={styles.title}
          color="white"
          font="changa"
          weight="regular"
        />

        <ul>
          {stack.map((technology, techIndex) => (
            <li key={techIndex + technology.techName}>
              <CardLarge projectsTechnologies={technology} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <main>
      <section>
        <div className={styles.hero}>
          <div className={styles.wrapper}>
            <Heading
              text={name || "Loading"}
              level={1}
              classList={styles.title}
              color="white"
              font="changa"
              weight="semi-bold"
            />
            <Text
              text={shortDescription}
              classList={styles.subtitle}
              weight="regular"
              color="white"
            />
          </div>
          <div className={styles.bg}>
            {renderRectangle("variant-1")}
            {renderRectangle("variant-2")}
            {renderRectangle("variant-3")}
            {renderRectangle("variant-4")}
            {renderRectangle("variant-5")}
            {renderRectangle("variant-6")}
          </div>
        </div>

        {description && renderIntro()}

        {process.length > 0 && renderProcess()}

        {stack.length > 0 && renderStack()}

        {media2.url && media2.type === "image" && (
          <img className={styles.media} src={media2.url} alt={media2.alt} />
        )}
      </section>
    </main>
  );
};
