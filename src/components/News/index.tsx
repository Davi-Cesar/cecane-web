import styles from "./styles.module.scss";

interface NewsPros {
  title: string;
  date: string;
  description: string;
  paragraph?: string;
  paragraphTwo?: string;
  paragraphTree?: string;
  textLink?: string;
  textLinkSecundary?: string;
  textLinkSecundaryTwo?: string;
  textLinkTerciary?: string;
  link: string;
  linkSecundaryTwo?: string;
  linkSecundary?: string;
  linkTerciary?: string;
}

export function News({
  title,
  date,
  description,
  paragraph,
  paragraphTwo,
  paragraphTree,
  textLink,
  textLinkSecundary,
  textLinkSecundaryTwo,
  textLinkTerciary,
  link,
  linkSecundary,
  linkSecundaryTwo,
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
        {paragraph != null ? <p>{paragraph}</p> : <a type="text"></a>}
        {paragraphTwo != null ? <p>{paragraphTwo}</p> : <a type="text"></a>}
        {paragraphTree != null ? <p>{paragraphTree}</p> : <a type="text"></a>}
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
        {linkSecundaryTwo != null ? (
          <div>
            {textLinkSecundaryTwo}{" "}
            <a href={linkSecundaryTwo} target="_blank" rel="noreferrer">
              {linkSecundaryTwo}
              <br></br>
            </a>
          </div>
        ) : (
          <a></a>
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
