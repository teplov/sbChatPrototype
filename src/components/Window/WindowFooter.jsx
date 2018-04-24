import React from 'react';
import Button from '../Button';
import Input, { InputDiv } from '../Input';
import { styles, css } from './styles.js';

export default class WindowFooter extends React.Component {
  render() {
    return (
      <div className={css(styles.footer)}>
        <Input placeholder="Enter your text here..." maxHeight="" />
        <Button text="Send" sign="send1" color="green" size="30" />
      </div>
    );
  }
}
