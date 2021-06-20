import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import styles from './styles.module.scss';

interface StageButtonProps {
  onClick: () => void;
}
export function NextStageButton(props: StageButtonProps): JSX.Element {
  const { onClick } = props;
  return (
    <button className={styles.primary} type="button" onClick={onClick}>
      <FiChevronRight />
    </button>
  );
}

export function PreviousStageButton(props: StageButtonProps): JSX.Element {
  const { onClick } = props;
  return (
    <button className={styles.primary} type="button" onClick={onClick}>
      <FiChevronLeft />
    </button>
  );
}
