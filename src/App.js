import React, {Component} from 'react';
import Row from './components/Row/Row';
import classes from './App.module.css';

class App extends Component {
  state = {
    tokenColor: [
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
      Array(7).fill(null),
    ],
    tokenClickable: [
      Array(7).fill(false),
      Array(7).fill(false),
      Array(7).fill(false),
      Array(7).fill(false),
      Array(7).fill(false),
      Array(7).fill(true),
    ],
    nextPlayer: 'red'
  }

  clickedTokenHandler = (row, column) => {
    const tokenColor = [...this.state.tokenColor];
    tokenColor[row][column] = this.state.nextPlayer;

    const tokenClickable = [...this.state.tokenClickable];
    if (row - 1 >= 0) {
      tokenClickable[row][column] = false;
      tokenClickable[row - 1][column] = true;
    }

    let player = 'red';
    if (this.state.nextPlayer === 'red') {
      player = 'blue'
    }

    this.setState({
      tokenColor: tokenColor,
      tokenClickable: tokenClickable,
      nextPlayer: player
    });
  }

  render() {
    return(
      <div className={classes.App}>
        {this.state.tokenColor.map((row, index) => {
          return <Row 
            key={index}
            row={index}
            tokens={this.state.tokenColor[index]}
            tokenClickable={this.state.tokenClickable[index]}
            tokenClick={this.clickedTokenHandler}
            nextPlayer={this.state.nextPlayer} />
        })}
      </div>
    );
  }
}

export default App;
