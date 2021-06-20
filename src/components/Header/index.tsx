import styles from './styles.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logoPNG.png" alt="StageView Logo" />
      </div>
      <div className={styles.titleAndButton}>
        <h1>Acompanhamento de Pedido</h1>
        <a href="/">
          <div className={styles.whatsappButton}>
            <img src="/whatsappSVG.svg" alt="Whatsapp" />
          </div>
        </a>
      </div>
    </header>
  );
}
