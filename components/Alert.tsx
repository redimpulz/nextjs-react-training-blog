import React from 'react';
import styles from './alert.module.css';
import cn from 'classnames';

type Props = { type: 'success' | 'error' };

const Alert: React.FC<Props> = ({ children, type }) => {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
};

export default Alert;
