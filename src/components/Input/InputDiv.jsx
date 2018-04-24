import React from 'react';
import { styles, css } from './styles.js';

export default class InputDiv extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.inputDivRef = React.createRef();
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.state = {
      isGrowed: false
    };
  }

  keyUpHandler(e) {
    const domNode = this.inputDivRef.current;
    const inputHeight = domNode.getBoundingClientRect().height;

    inputHeight < 50
      ? this.setState({ isGrowed: false })
      : this.setState({ isGrowed: true });
  }

  render() {
    return (
      <div
        ref={this.inputDivRef}
        onKeyUp={this.keyUpHandler}
        style={{
          maxHeight: parseInt(this.props.maxHeight, 10) + 'px'
        }}
        className={css(
          styles.input,
          styles.inputDiv,
          this.state.isGrowed && styles.grow
        )}
        contentEditable="true"
      />
    );
  }
}
