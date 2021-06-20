import styles from './styles.module.scss';

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/TimeBravo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <img src="/timebravoIcon.ico" alt="TimeBravo Logo" />
        </span>
        TimeBravo
      </a>
    </footer>
  );
}
