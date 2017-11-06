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
    if (e.target.dataset.can) {
      this.setState({
        value: this.props.input,
        can: false
      })
      this.props.setInput();
    }
  }
  render () {
    let name = 'block ' + this.props.num;
    return <div className={name}> 
      <input value={this.state.value} onClick={this.madeMove} data-can={this.state.can}></input>
    </div>
  }
}

export default Block;