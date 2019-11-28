import React, {Component} from 'react';
import classes from './Token.module.css';

class Token extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.tokenClickable || (nextProps.tokenClickable !== this.props.tokenClickable);
    }

    render() {
        let tokenClasses = [classes.Token];
        if (this.props.tokenColor === 'red') {
            tokenClasses.push(classes.red);
        } 
        if (this.props.tokenColor === 'blue') {
            tokenClasses.push(classes.blue);
        }
        
        if (this.props.tokenClickable) {
            tokenClasses.push(classes[`clickable${this.props.nextPlayer}`]);
        }
        
        const clickAction = this.props.tokenClickable ? this.props.clicked : null;
    
        return (
            <div 
                className={tokenClasses.join(' ')}
                onClick={clickAction}>
            </div>
        );
    }
}

export default Token;