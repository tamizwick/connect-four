import React from 'react';
import classes from './PlayerIndicator.module.css';

const playerIndicator = (props) => {
    let tokenClasses = [classes.Token];

    if (props.nextPlayer === 'red') {
        tokenClasses.push(classes.red);
    }
    if (props.nextPlayer === 'blue') {
        tokenClasses.push(classes.blue);
    }

    return (
        <div className={classes.PlayerIndicator}>
            <h1>Next Player:</h1>
            <div className={tokenClasses.join(' ')}></div>
        </div>
    );
}

export default playerIndicator;