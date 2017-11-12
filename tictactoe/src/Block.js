import React, {Component} from 'react';

class Block extends Component {
  constructor (props) {
    super (props);
    this.state = {
      can: true,
      value: '',
      row: this.props.row,
      n: this.props.num
    }
    this.madeMove = this.madeMove.bind(this);
  }
  madeMove (e) {
    if (e.target.dataset.can === 'true') {
      console.log('hello');
      this.setState({
        value: this.props.input,
        can: false
      })
      this.props.setInput(this.state.row, this.state.n);
    }
  }
  render () {
    return <div id={`${this.props.row} ${this.props.num}`} className={`block`} key={this.props.n}> 
      <button className='blocky' value={this.state.value} onClick={this.madeMove} data-can={this.state.can}>{this.props.board[this.props.row][this.props.num][0]}</button>
    </div>
  }
}

export default Block;