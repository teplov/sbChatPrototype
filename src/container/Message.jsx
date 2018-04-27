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

  render() {
    return (
      <div className={css(styles.message, theme.message)}>
        {!this.props.dir && (
          <Avatar pic={this.props.avatar} themeStyle={theme.avatar} />
        )}
        <Bubble
          themeStyle={[theme.bubble, theme['dir' + this.props.dir]]}
          dir={this.props.dir}
        >
          {!this.props.dir && (
            <Title text="Василиса" themeStyle={theme.operatorTitle} />
          )}
          {this.props.text}
        </Bubble>
      </div>
    );
  }
}