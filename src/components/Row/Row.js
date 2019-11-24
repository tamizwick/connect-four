import React from 'react';
import Token from '../Token/Token';
import classes from './Row.module.css';

const row = (props) => {
    const tokenArray = props.tokens.map((token, index) => {
        const key = `column${index}`;
        return <Token 
            key={key} 
            clicked={() => props.tokenClick(props.row, index)}
            tokenColor={props.tokens[index]} />
    })

    return (
        <div className={classes.Row}>
            {tokenArray}
        </div>
    );
}

export default row;