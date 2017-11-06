import React, {Component} from 'react';
import Row from './Row';

class Board extends Component {
  constructor (props) {
    super (props);
    this.state = {
      input: 'X',
    }
    this.setInput = this.setInput.bind(this);
  }

  setInput () {
    let next;
    if (this.state.input === 'X') {
      next = 'O';
    } else {
      next = 'X';
    }
    this.setState({
      input: next
    });
  }

  handleWin () {
    let blocks = document.getElementsByClassName('block');
  }

  render () {
    return <div className='board'>
      <div className='container'>
        {[0,1,2].map(num => {
          return <Row num={num} key={num} input={this.state.input} setInput={this.setInput}/>
        })}
      </div>
    </div>
  }
}

export default Board;
//<Block num={9} input={this.state.input} setInput={this.setInput}/>