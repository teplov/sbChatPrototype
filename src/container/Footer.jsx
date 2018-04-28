import React from 'react';
import theme from '../themes';
import Button from '../components/Button';
import Input, { InputDiv } from '../components/Input';
import { styles, css } from './styles.js';

import store from '../store';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={css(styles.footer, theme.footer)}>
        <Input
          placeholder="Enter your text here..."
          maxHeight="50"
          onMessage={length => store.dispatch({ type: 'MESSAGE', length })}
        />
        <Button
          text="Send"
          sign="send"
          color={store.getState() ? 'green' : '#ccc'}
          size="30"
        />
      </div>
    );
  }
}
