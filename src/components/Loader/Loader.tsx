import {FC} from 'react';

import {Box} from '@mui/material';

import styles from './Loader.module.scss';

const Loader: FC = () => {
  return (
    <Box className={styles.spinnerContainer}>
      <Box className={styles.spinner} />
    </Box>
  );
};

export default Loader;
