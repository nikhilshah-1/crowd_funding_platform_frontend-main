import React from 'react';
import styles from './styles/loaderFullPage.module.css';

const LoaderFullPage = () => {
  return (
    <div className={styles.fullpage}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoaderFullPage;
