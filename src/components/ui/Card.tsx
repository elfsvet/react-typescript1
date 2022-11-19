import classes from './Card.module.css';
import React, { PropsWithChildren } from 'react';



function Card(props: PropsWithChildren) {
  return <div className={classes.card}>{props.children}</div>;
}
export default Card;
