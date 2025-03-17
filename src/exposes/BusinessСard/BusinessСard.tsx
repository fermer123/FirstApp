import {FC} from 'react';

import {Avatar, Box, Card, CardContent, Typography} from '@mui/material';

import * as styles from './BusinessСard.module.scss';

interface IProps {
  name: string;
}

const BusinessСard: FC<IProps> = ({name = 'Anonymous'}) => {
  return (
    <Card className={styles.root}>
      <CardContent>
        <Box className={styles.header}>
          <Avatar alt={name} className={styles.avatar} />
          <Typography variant='h5' className={styles.name}>
            {name}
          </Typography>
          <Typography variant='subtitle1' className={styles.title}>
            Frontend developer
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BusinessСard;
