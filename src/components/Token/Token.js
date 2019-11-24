import React from 'react';
import classes from './Token.module.css';

const token = (props) => {
    let tokenClasses = [classes.Token];
    if (props.tokenColor === 'red') {
        tokenClasses = [classes.Token, classes.red];
    } 
    if (props.tokenColor === 'blue') {
        tokenClasses = [classes.Token, classes.blue];
    }
    
    return (
        <div 
            className={tokenClasses.join(' ')}
            onClick={props.clicked}>
        </div>
    );
}

export default token;