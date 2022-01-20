import styles from "./styles.module.scss";

interface ProfilePros {
  img: string;
  name: string;
  title: string;
  description: string;
  link: string;
}

export function Profile({ img, name, title, description, link }: ProfilePros) {
  return (
    <div className={styles.Profile}>
      <img src={img} alt={name} />
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
