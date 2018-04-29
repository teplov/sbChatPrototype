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
    return chat.map((item, index) => {
      const prev = index - 1;
      const next = index + 1;
      let position = 'one';

      if (
        chat[prev] &&
        chat[prev].userId !== item.userId &&
        chat[next] &&
        chat[next].userId !== item.userId
      ) {
        position = 'one';
      } else if (
        (!chat[prev] && chat[next] && chat[next].userId === item.userId) ||
        (chat[prev] &&
          chat[prev].userId !== item.userId &&
          chat[next] &&
          chat[next].userId === item.userId)
      ) {
        position = 'start';
      } else if (
        chat[prev] &&
        chat[prev].userId === item.userId &&
        chat[next] &&
        chat[next].userId === item.userId
      ) {
        position = 'middle';
      } else if (
        chat[prev] &&
        chat[prev].userId === item.userId &&
        chat[next] &&
        chat[next].userId !== item.userId
      ) {
        position = 'end';
      }
      return (
        <Message
          key={'message_' + index}
          dir={item.dir}
          text={item.text}
          name={item.operator}
          avatar={item.avatar}
          buttons={item.buttons}
          position={position}
        />
      );
    });
  }

  render() {
    return <div className={css(styles.body, theme.body)}>{this.getChat()}</div>;
  }
}
