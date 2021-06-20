import styles from './styles.module.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};
export function StageCardContainer({ children }: Props): JSX.Element {
  return <section className={styles.container}>{children}</section>;
}
