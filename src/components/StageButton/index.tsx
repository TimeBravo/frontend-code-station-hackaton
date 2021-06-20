import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import styles from './styles.module.scss';

export function NextStageButton(): JSX.Element {
  return (
    <button className={styles.primary} type="button">
      <FiChevronRight />
    </button>
  );
}

export function PreviousStageButton(): JSX.Element {
  return (
    <button className={styles.primary} type="button">
      <FiChevronLeft />
    </button>
  );
}
