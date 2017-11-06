import React, {Component} from 'react';
import Block from './Block';

class Row extends Component {
  // constructor (props) {
  //   super(props);
  // }

  render () {
    return <div className={`row ${this.props.num}`} key={this.props.num}>
      {
        [0,1,2].map(n => {
          return <Block num={n}
          key={n} 
          row={this.props.num} 
          input={this.props.input} 
          setInput={this.props.setInput}/>
        })
      }
    </div>
  }
}
export default Row;