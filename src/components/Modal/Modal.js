import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => {
    return (
        <div className={classes.Modal}>
            <p>{props.children}</p>
        </div>
    );
}

export default modal;