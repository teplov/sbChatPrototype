import React from 'react';
import theme from '../themes';
import Button from '../components/Button';

import Input, { InputDiv } from '../components/Input';
import { styles, css } from './styles.js';
import { config } from '../config.js';

import store from '../store';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={css(styles.footer, theme.footer)}>
        <Input
          placeholder="Enter your text here..."
          maxHeight={config.inputMaxHeight}
          onMessage={length => store.dispatch({ type: 'MESSAGE', length })}
        />
        <Button
          text="Send"
          sign={config[config.theme].sendButtonSign}
          color={
            store.getState()
              ? config[config.theme].primaryColor
              : config[config.theme].disabledColor
          }
          size={config[config.theme].sendButtonSize}
        />
      </div>
    );
  }
}
