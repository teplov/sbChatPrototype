import React from 'react';
import { styles, css } from './styles.js';
import InputDiv from './InputDiv';

import store from '../../store';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    if (!!this.props.maxHeight) {
      return (
        <InputDiv
          maxHeight={this.props.maxHeight}
          className={css(styles.input)}
          placeholder={this.props.placeholder}
          onMessage={this.props.onMessage}
        />
      );
    } else {
      return (
        <input
          type="text"
          className={css(styles.input)}
          placeholder={this.props.placeholder}
        />
      );
    }
  }
}

export { InputDiv };
