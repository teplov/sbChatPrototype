import React from 'react';
import { styles, css } from './styles.js';

export default class InputDiv extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.inputDivRef = React.createRef();
    this.keyUpHandler = this.keyUpHandler.bind(this); // ?????
    this.state = {
      isGrowed: false,
      placeholder: this.props.placeholder,
      message: ''
    };
  }

  keyUpHandler(e) {
    e.persist();
    const message = e.target.innerText;
    const domNode = this.inputDivRef.current;
    const inputHeight = domNode.getBoundingClientRect().height;

    this.setState({ message });
    this.props.onMessage(message.length);

    inputHeight < 50
      ? this.setState({ isGrowed: false })
      : this.setState({ isGrowed: true });
  }

  setFocus(e) {
    this.setState({ placeholder: '' });
  }

  setBlur(e) {
    // восстанавливаем текст плейсхолдера только, если стейт сообщения не пустой
    !this.state.message.length &&
      this.setState({ placeholder: this.props.placeholder });
    this.props.onMessage(this.state.message.length);
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
        contentEditable={true}
        suppressContentEditableWarning={true}
        onFocus={e => this.setFocus(e)}
        onBlur={e => this.setBlur(e)}
      >
        {this.state.placeholder}
      </div>
    );
  }
}
