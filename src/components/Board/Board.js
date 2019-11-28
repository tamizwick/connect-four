import React from 'react';
import Row from '../Row/Row';
import classes from './Board.module.css';

const board = (props) => {
    return(
      <div className={classes.Board}>
        {props.tokenColor.map((row, index) => {
          return <Row 
            key={index}
            row={index}
            tokens={props.tokenColor[index]}
            tokenClickable={props.tokenClickable[index]}
            tokenClick={props.clickedTokenHandler}
            nextPlayer={props.nextPlayer} />
        })}
      </div>
    );
}

export default board;
