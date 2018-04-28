import React from 'react';
import theme from '../themes';
import Bubble from '../components/Bubble';
import Title from '../components/Title';
import Avatar from '../components/Avatar';
import { styles, css } from './styles.js';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  messageOne() {
    return (
      <div className={css(styles.message, theme.message, theme.messageOne)}>
        {!this.props.dir && (
          <Title text="Василиса" themeStyle={theme.operatorTitle} />
        )}
        {!this.props.dir && (
          <Avatar pic={this.props.avatar} themeStyle={theme.avatar} />
        )}
        <Bubble
          themeStyle={[
            theme.bubble,
            theme['dir' + this.props.dir],
            theme['poOne']
          ]}
          dir={this.props.dir}
        >
          {this.props.text}
        </Bubble>
      </div>
    );
  }

  messageStart() {
    return (
      <div className={css(styles.message, theme.message, theme.messageStart)}>
        {!this.props.dir && (
          <Title text="Василиса" themeStyle={theme.operatorTitle} />
        )}
        {!this.props.dir && (
          <Avatar pic={this.props.avatar} themeStyle={theme.avatar} />
        )}
        <Bubble
          themeStyle={[
            theme.bubble,
            theme['dir' + this.props.dir],
            theme['poStart'],
            theme['poStartDir' + this.props.dir]
          ]}
          dir={this.props.dir}
        >
          {this.props.text}
        </Bubble>
      </div>
    );
  }

  messageMiddle() {
    return (
      <div className={css(styles.message, theme.message, theme.messageMiddle)}>
        <Bubble
          themeStyle={[
            theme.bubble,
            theme['dir' + this.props.dir],
            theme['poMiddle'],
            theme['poMiddleDir' + this.props.dir]
          ]}
          dir={this.props.dir}
        >
          {this.props.text}
        </Bubble>
      </div>
    );
  }

  messageEnd() {
    return (
      <div className={css(styles.message, theme.message, theme.messageEnd)}>
        <Bubble
          themeStyle={[
            theme.bubble,
            theme['dir' + this.props.dir],
            theme['poEnd'],
            theme['poEndDir' + this.props.dir]
          ]}
          dir={this.props.dir}
        >
          {this.props.text}
        </Bubble>
      </div>
    );
  }

  render() {
    console.log(this.props.position);
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
