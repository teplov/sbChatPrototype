import React from 'react';
import theme from '../themes';
import { config } from '../config.js';
import Message from './Message';
import { styles, css } from './styles.js';

import chat from '/data/conversation.js';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getChat() {
    return chat.map(item => (
      <Message dir={item.dir} text={item.text} avatar={config.avatar} />
    ));
  }

  render() {
    return <div className={css(styles.body, theme.body)}>{this.getChat()}</div>;
  }
}
