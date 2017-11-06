import React, {Component} from 'react';

class Block extends Component {
  constructor (props) {
    super (props);
    this.state = {
      can: true,
      value: ''
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
      this.props.setInput();
    }
  }
  render () {
    return <div id={`${this.props.row} ${this.props.num}`} className={`block`} key={this.props.n}> 
      <button className='blocky' value={this.state.value} onClick={this.madeMove} data-can={this.state.can}>{this.state.value}</button>
    </div>
  }
}

export default Block;