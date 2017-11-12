import React, {Component} from 'react';
import Row from './Row';

class Board extends Component {
  constructor (props) {
    super (props);
    this.state = {
      input: 'X',
      board: [
      [[],[],[]],
      [[],[],[]],
      [[],[],[]]
    ]
    }
    this.setInput = this.setInput.bind(this);
    this.handleWin = this.handleWin.bind(this);
  }

  setInput (i,j) {
    let next;
    if (this.state.input === 'X') {
      next = 'O';
    } else {
      next = 'X';
    }
    console.log(this.state.board);
    let board = this.state.board;
    board[i][j].push(this.state.input);
    let won = this.handleWin();
    if (won) {
      console.log('reseting');
      this.setState({
        input: 'X',
        board: [
          [[],[],[]],
          [[],[],[]],
          [[],[],[]]
        ]
      });
    } else {
      this.setState({
        input: next,
        board: board
      });
    }
  }

  handleWin () {
    let board = this.state.board;
    let truth = false;
    board.forEach(row => {
      console.log(row);
      if (row[0][0] && row[1][0] && row[2][0] && row[0][0] === row[1][0] && row[0][0] === row[2][0]) {
        alert( `${this.state.input} Won!`);
        truth = true;
        return;
      }
    });
    if (!truth) {
      for (var i = 0; i < 3; i++) {
        if (board[0][i][0] && board[1][i][0] && board[2][i][0] && board[0][i][0] === board[1][i][0] && board[0][i][0] === board[2][i][0]) {
          alert( `${this.state.input} Won!`);
          truth = true;
          return;
        }
      }
    }
    if (!truth && board[0][0][0] && board[1][1][0] && board[2][2][0] && board[0][0][0] === board[1][1][0] && board[0][0][0] === board[2][2][0]) {
      alert( `${this.state.input} Won!`);
      truth = true;
    }
    if (!truth && board[0][2][0] && board[1][1][0] && board[2][0][0] && board[0][2][0] === board[1][1][0] && board[0][2][0] === board[2][0][0]) {
      alert( `${this.state.input} Won!`);
      truth = true;
    }
    return truth;
    // if (truth) {
    //   alert(`${this.state.input} Won!`);
    // }
  }

  render () {
    return <div className='board'>
      <div className='container'>
        {this.state.board.map((row, num) => {
          return <Row num={num} key={num} 
          input={this.state.input} 
          setInput={this.setInput} 
          row={row}
          board={this.state.board}
          handleWin={this.handleWin}/>
        })}
      </div>
    </div>
  }
}

export default Board;
//<Block num={9} input={this.state.input} setInput={this.setInput}/>