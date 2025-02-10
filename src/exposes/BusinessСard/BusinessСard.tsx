import {FC} from 'react';

interface IProps {
  value: string;
}

const BusinessСard: FC<IProps> = ({value}) => {
  return <div>{value}</div>;
};

export default BusinessСard;
