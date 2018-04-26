import React from 'react';
import Button from '../components/Button';
import Input, { InputDiv } from '../components/Input';
import { styles, css } from './styles.js';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={css(styles.footer)}>
        <Input placeholder="Enter your text here..." maxHeight="50" />
        <Button text="Send" sign="send" color="green" size="30" />
      </div>
    );
  }
}
