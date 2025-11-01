import React from 'react';
import styles from './Spacer.module.css';

type SpacerProps = {
  height: number | string;
};

/**
 * Spacer renders an empty block with a configurable height to push content apart.
 */
const Spacer: React.FC<SpacerProps> = ({ height }) => {
  const resolvedHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div
      className={styles.spacer}
      style={{ height: resolvedHeight }}
      aria-hidden="true"
      data-testid="spacer"
    />
  );
};

export default Spacer;
