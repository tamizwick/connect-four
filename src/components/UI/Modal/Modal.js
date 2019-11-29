import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => {
    const modalClasses = [classes.Modal];
    modalClasses.push(classes[props.winner]);

    const tokenClasses = [classes.Token];
    tokenClasses.push(classes[props.winner]);

    return (
        <div className={modalClasses.join(' ')}>
            <p>{props.children}</p>
            <div className={tokenClasses.join(' ')}></div>
            <button onClick={props.buttonClicked}>New game</button>
        </div>
    );
}

export default modal;