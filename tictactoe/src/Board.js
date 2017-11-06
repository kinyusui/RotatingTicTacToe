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
    this.handleWin();
    this.setState({
      input: next,
      board: board
    });
  }

  handleWin () {
    let board = this.state.board;
    let truth = true;
    board.forEach(row => {
      console.log(row);
      if (row[0][0] && row[1][0] && row[2][0] && row[0][0] === row[1][0] && row[0][0] === row[2][0]) {
        alert( `${this.state.input} Won!`);
      }
    });
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
          handleWin={this.handleWin}/>
        })}
      </div>
    </div>
  }
}

export default Board;
//<Block num={9} input={this.state.input} setInput={this.setInput}/>