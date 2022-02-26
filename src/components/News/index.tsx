import styles from "./styles.module.scss";

interface NewsPros {
  title: string;
  date: string;
  description: string;
  textLink?: string;
  textLinkSecundary?: string;
  textLinkTerciary?: string;
  link: string;
  linkSecundary?: string;
  linkTerciary?: string;
}

export function News({
  title,
  date,
  description,
  textLink,
  textLinkSecundary,
  textLinkTerciary,
  link,
  linkSecundary,
  linkTerciary,
}: NewsPros) {
  return (
    <div className={styles.Content}>
      <div className={styles.title}>
        <h5>{title}</h5>
        <p>{date}</p>
      </div>
      <div className={styles.containerText}>
        {description}
        {textLink != null ? (
          <>
            {" "}
            Acesse o{" "}
            <span>
              <a href={link} target="_blank" rel="noreferrer">
                {textLink}
              </a>
              .
            </span>
          </>
        ) : (
          <span>
            {" "}
            <a href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
            .
          </span>
        )}
        {linkSecundary != null ? (
          <div>
            {textLinkSecundary}{" "}
            <a href={linkSecundary} target="_blank" rel="noreferrer">
              {linkSecundary}
              <br></br>
            </a>
          </div>
        ) : (
          <a href={linkSecundary}></a>
        )}
        {linkTerciary != null ? (
          <div>
            Em casos de dúvidas sobre o evento, enviar e-mail para:{" "}
            <a href={linkTerciary} target="_blank" rel="noreferrer">
              {textLinkTerciary}
              <br></br>
            </a>
          </div>
        ) : (
          <a href={linkTerciary}></a>
        )}
      </div>
    </div>
  );
}
