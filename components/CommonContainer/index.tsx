import React from 'react';
import classes from './styles.module.scss';

export default function CommonContainer({ children }: { children: React.ReactNode }) {
  return <div className={classes.commonContainerWrapper}>{children}</div>;
}
