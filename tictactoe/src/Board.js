import React, {Component} from 'react';
import Block from './Block';

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
    let block1 = document.getElementsByClassName('1')[0];
    let block2 = document.getElementsByClassName('2')[0];
    let block3 = document.getElementsByClassName('3')[0];
    let block4 = document.getElementsByClassName('4')[0];
    let block5 = document.getElementsByClassName('5')[0];
    let block6 = document.getElementsByClassName('6')[0];
    let block7 = document.getElementsByClassName('7')[0];
    let block8 = document.getElementsByClassName('8')[0];
    let block9 = document.getElementsByClassName('9')[0];
    if ((block1.value === block2.value && block1.value === block3.value)
    ) {
      alert('win');
    } 

  }

  render () {
    return <div className='board'>
      <div className='container'>
      <Block num={1} input={this.state.input} setInput={this.setInput}/>
      <Block num={2} input={this.state.input} setInput={this.setInput}/>
      <Block num={3} input={this.state.input} setInput={this.setInput}/>
      </div><br/>
      <div className='container'>
      <Block num={4} input={this.state.input} setInput={this.setInput}/>
      <Block num={5} input={this.state.input} setInput={this.setInput}/>
      <Block num={6} input={this.state.input} setInput={this.setInput}/>
      </div><br/>
      <div className='container'>
      <Block num={7} input={this.state.input} setInput={this.setInput}/>
      <Block num={8} input={this.state.input} setInput={this.setInput}/>
      <Block num={9} input={this.state.input} setInput={this.setInput}/>
      </div><br/>
    </div>
  }
}

export default Board;