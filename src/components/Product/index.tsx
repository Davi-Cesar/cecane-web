import styles from "./styles.module.scss";

interface ProductProps {
  name: String;
  text: String;
}

export function Product({ name, text }: ProductProps) {
  return (
    <div className={styles.Content}>
      <div className={styles.Content}>
        <div className={styles.containerProduct}>
          <h4>{name}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
