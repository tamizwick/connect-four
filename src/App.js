import React, {Component} from 'react';
import Row from './components/Row/Row';
import classes from './App.module.css';

class App extends Component {
  state = {
    tokenStatus: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ],
    nextPlayer: 'red'
  }

  clickedTokenHandler = (row, column) => {
    const tokenStatus = [...this.state.tokenStatus];
    tokenStatus[row][column] = this.state.nextPlayer;

    let player = 'red';
    if (this.state.nextPlayer === 'red') {
      player = 'blue'
    }

    this.setState({
      tokenStatus: tokenStatus,
      nextPlayer: player
    });
  }

  render() {
    return(
      <div className={classes.App}>
        {this.state.tokenStatus.map((row, index) => {
          return <Row 
            key={index}
            row={index}
            tokens={this.state.tokenStatus[index]}
            tokenClick={this.clickedTokenHandler} />
        })}
      </div>
    );
  }
}

export default App;
