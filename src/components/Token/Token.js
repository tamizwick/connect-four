import React from 'react';
import classes from './Token.module.css';

const token = (props) => {
    let tokenClasses = [classes.Token];
    if (props.tokenColor === 'red') {
        tokenClasses.push(classes.red);
    } 
    if (props.tokenColor === 'blue') {
        tokenClasses.push(classes.blue);
    }
    
    if (props.tokenClickable) {
        tokenClasses.push(classes[`clickable${props.nextPlayer}`]);
    }
    
    const clickAction = props.tokenClickable ? props.clicked : null;

    return (
        <div 
            className={tokenClasses.join(' ')}
            onClick={clickAction}>
        </div>
    );
}

export default token;