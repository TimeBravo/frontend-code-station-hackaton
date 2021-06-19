import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import styles from './styles.module.scss';

export function NextStageButton() {
  return (
    <button className={styles.primary}>
      <FiChevronRight />
    </button>
  );
}

export function PreviousStageButton() {
  return (
    <button className={styles.primary}>
      <FiChevronLeft />
    </button>
  );
}
