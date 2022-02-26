import styles from "./styles.module.scss";

interface InformesPros {
  title: string;
  date: string;
  description: string;
  link: string;
  linkSecundario?: string;
}

export function Informes({
  title,
  date,
  description,
  link,
  linkSecundario,
}: InformesPros) {
  return (
    <div className={styles.Content}>
      <div className={styles.title}>
        <h5>{title}</h5>
        <p>{date}</p>
      </div>
      <div className={styles.containerText}>
        {description}
        <div>
          {linkSecundario != null ? (
            <a href={linkSecundario} target="_blank" rel="noreferrer">
              {linkSecundario}
              <br></br>
            </a>
          ) : (
            <a href={linkSecundario}></a>
          )}
          Para ler o{" "}
          <span>
            <a href={link} target="_blank" rel="noreferrer">
              Informe
            </a>
          </span>{" "}
          completo.
        </div>
      </div>
    </div>
  );
}
