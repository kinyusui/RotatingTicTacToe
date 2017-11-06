import React, {Component} from 'react';
import Block from './Block';

class Row extends Component {
  // constructor (props) {
  //   super(props);
  // }

  render () {
    return <div className={`row ${this.props.num}`} key={this.props.num}>
      {
        this.props.row.map((block,n) => {
          return <Block num={n}
          key={n}
          block={block} 
          row={this.props.num}
          input={this.props.input} 
          setInput={this.props.setInput}
          handleWin={this.props.handleWin}/>
        })
      }
    </div>
  }
}
export default Row;