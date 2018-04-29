import React from 'react';
import theme from '../themes';
import Bubble from '../components/Bubble';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Title from '../components/Title';
import Avatar from '../components/Avatar';
import { styles, css } from './styles.js';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getButtons(buttons) {
    console.log(buttons);
    const bubbleButtons = buttons.map((item, index) => {
      return (
        <Button
          key={'bubbleButtons_' + index}
          text={item}
          themeStyle={[styles.bubbleButton, theme.bubbleButton]}
        />
      );
    });

    return (
      <div className={css(styles.bubbleButtons, theme.bubbleButtons)}>
        {bubbleButtons}
      </div>
    );
  }

  messageOne() {
    return (
      <div className={css(styles.message, theme.message, theme.messageOne)}>
        {!this.props.dir && (
          <Title text={this.props.name} themeStyle={theme.operatorTitle} />
        )}
        {!this.props.dir && (
          <Avatar pic={this.props.avatar} themeStyle={theme.avatar} />
        )}
        <Bubble
          themeStyle={[
            styles.bubble,
            theme.bubble,
            theme['dir' + this.props.dir],
            theme['poOne']
          ]}
          dir={this.props.dir}
        >
          <div className={css(styles.bubbleText, theme.bubbleText)}>
            {this.props.text}
            {this.props.buttons && this.getButtons(this.props.buttons)}
          </div>
          {!!this.props.dir && (
            <Icon
              themeStyle={theme.bubbleStatus || styles.bubbleStatus}
              sign="statusOk"
              color="green"
            />
          )}
        </Bubble>
      </div>
    );
  }

  messageStart() {
    return (
      <div className={css(styles.message, theme.message, theme.messageStart)}>
        {!this.props.dir && (
          <Title text={this.props.name} themeStyle={theme.operatorTitle} />
        )}
        {!this.props.dir && (
          <Avatar pic={this.props.avatar} themeStyle={theme.avatar} />
        )}
        <Bubble
          themeStyle={[
            styles.bubble,
            theme.bubble,
            theme['dir' + this.props.dir],
            theme['poStart'],
            theme['poStartDir' + this.props.dir]
          ]}
          dir={this.props.dir}
        >
          <div className={css(styles.bubbleText, theme.bubbleText)}>
            {this.props.text}
            {this.props.buttons && this.getButtons(this.props.buttons)}
          </div>
          {!!this.props.dir && (
            <Icon
              themeStyle={theme.bubbleStatus || styles.bubbleStatus}
              themeStyle={theme.bubbleStatus}
              sign="statusSend"
              color="grey"
            />
          )}
        </Bubble>
      </div>
    );
  }

  messageMiddle() {
    return (
      <div className={css(styles.message, theme.message, theme.messageMiddle)}>
        <Bubble
          themeStyle={[
            styles.bubble,
            theme.bubble,
            theme['dir' + this.props.dir],
            theme['poMiddle'],
            theme['poMiddleDir' + this.props.dir]
          ]}
          dir={this.props.dir}
        >
          <div className={css(styles.bubbleText, theme.bubbleText)}>
            {this.props.text}
            {this.props.buttons && this.getButtons(this.props.buttons)}
          </div>
          {!!this.props.dir && (
            <Icon
              themeStyle={theme.bubbleStatus || styles.bubbleStatus}
              themeStyle={theme.bubbleStatus}
              sign="statusError"
              color="red"
            />
          )}
        </Bubble>
      </div>
    );
  }

  messageEnd() {
    return (
      <div className={css(styles.message, theme.message, theme.messageEnd)}>
        <Bubble
          themeStyle={[
            styles.bubble,
            theme.bubble,
            theme['dir' + this.props.dir],
            theme['poEnd'],
            theme['poEndDir' + this.props.dir]
          ]}
          dir={this.props.dir}
        >
          <div className={css(styles.bubbleText, theme.bubbleText)}>
            {this.props.text}
            {this.props.buttons && this.getButtons(this.props.buttons)}
          </div>
          {!!this.props.dir && (
            <Icon
              themeStyle={theme.bubbleStatus || styles.bubbleStatus}
              sign="statusWait"
              color="grey"
            />
          )}
        </Bubble>
      </div>
    );
  }

  render() {
    switch (this.props.position) {
      case 'one':
        return this.messageOne();
      case 'start':
        return this.messageStart();
      case 'middle':
        return this.messageMiddle();
      case 'end':
        return this.messageEnd();
      default:
        return this.messageOne();
    }
  }
}
