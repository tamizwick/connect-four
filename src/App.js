import React, {Component} from 'react';
import Row from './components/Row/Row';
import Modal from './components/Modal/Modal';
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
    nextPlayer: 'red',
    winner: undefined
  }

  clickedTokenHandler = (row, column) => {
    const tokenColor = [...this.state.tokenColor];
    tokenColor[row][column] = this.state.nextPlayer;

    const tokenClickable = [...this.state.tokenClickable];
    if (row - 1 >= 0) {
      tokenClickable[row - 1][column] = true;
    }
    tokenClickable[row][column] = false;

    let player = 'red';
    if (this.state.nextPlayer === 'red') {
      player = 'blue'
    }

    this.setState(() => {
      let winner = this.checkForWinner(row, column);
      if (winner !== undefined) {
        return {
          tokenColor: tokenColor,
          tokenClickable: [
            Array(7).fill(false),
            Array(7).fill(false),
            Array(7).fill(false),
            Array(7).fill(false),
            Array(7).fill(false),
            Array(7).fill(false),
          ],
          nextPlayer: player,
          winner: winner
        }
      } else {
        return {
          tokenColor: tokenColor,
          tokenClickable: tokenClickable,
          nextPlayer: player
        }
      }
    });
  }

  checkForWinner = (row, column) => {
    let copyOfTokenColor = [...this.state.tokenColor];

    //Check for connect-four in a single row
    for (let i = 0; i < 4; i++) {
      if ( copyOfTokenColor[row][i] !== null &&
           copyOfTokenColor[row][i] === copyOfTokenColor[row][i + 1] &&
           copyOfTokenColor[row][i] === copyOfTokenColor[row][i + 2] &&
           copyOfTokenColor[row][i] === copyOfTokenColor[row][i + 3] ) {
        return copyOfTokenColor[row][i];
      }
    }

    //Check for connect-four in a single column
    for (let i = 0; i < 3; i++) {
      if ( copyOfTokenColor[i][column] !== null &&
           copyOfTokenColor[i][column] === copyOfTokenColor[i + 1][column] &&
           copyOfTokenColor[i][column] === copyOfTokenColor[i + 2][column] &&
           copyOfTokenColor[i][column] === copyOfTokenColor[i + 3][column] ) {
        return copyOfTokenColor[i][column];
      }
    }

    //Check for diagonal connect-four left-to-right
    for (let i = 0; i < 3; i++) {
      for (let y = 0; y < 4; y++) {
        if (copyOfTokenColor[i][y] !== null &&
            copyOfTokenColor[i][y] === copyOfTokenColor[i + 1][y + 1] &&
            copyOfTokenColor[i][y] === copyOfTokenColor[i + 2][y + 2] &&
            copyOfTokenColor[i][y] === copyOfTokenColor[i + 3][y + 3] ) {
          return copyOfTokenColor[i][y];
        }
      }
    }
    
    //Check for diagonal connect-four right-to-left
    for (let i = 0; i < 3; i++) {
      for (let y = 3; y < 7; y++) {
        if (copyOfTokenColor[i][y] !== null &&
            copyOfTokenColor[i][y] === copyOfTokenColor[i + 1][y - 1] &&
            copyOfTokenColor[i][y] === copyOfTokenColor[i + 2][y - 2] &&
            copyOfTokenColor[i][y] === copyOfTokenColor[i + 3][y - 3] ) {
          return copyOfTokenColor[i][y];
        }
      }
    }
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
        {this.state.winner !== undefined ? <Modal>The winner is {this.state.winner}</Modal> : null}
      </div>
    );
  }
}

export default App;
