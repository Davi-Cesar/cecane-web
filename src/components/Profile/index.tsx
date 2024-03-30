import styles from "./styles.module.scss";
import Image from "next/image";

interface ProfilePros {
  img: string;
  name: string;
  title: string;
  description: string;
  link: string;
}

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 100}`;
};
// http://localhost:3000/Cecane/Equipe/equipe/
export function Profile({ img, name, title, description, link }: ProfilePros) {
  return (
    <div className={styles.Profile}>
      <div
        className="flex h-[18px] w-[18px]"
        style={{
          position: "relative",
        }}
      >
        <img src={img} alt={name} />
      </div>
      <h4>{name}</h4>
      <a type="text" className={styles.Title}>
        {title}
      </a>
      <div className={styles.Description}>{description}</div>
      <div className={styles.ProfileFooter}>
        <button type="button">
          <a href={link} target="_blank" rel="noreferrer">
            <img src="/images/curriculo-e-cv.png" alt="curriculo" />
          </a>
        </button>
      </div>
    </div>
  );
}
