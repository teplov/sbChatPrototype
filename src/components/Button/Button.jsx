import React from 'react';
import Icon from '../Icon/Icon';
import { styles, css } from './styles.js';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { isIcon: false };
  }

  checkIcon(found) {
    found && this.setState({ isIcon: true });
  }

  textButton() {
    return this.props.text;
  }

  iconButton() {
    return (
      <Icon
        sign={this.props.sign}
        color={this.props.color}
        size={this.props.size}
        themeStyle={this.props.themeStyle}
      >
        {this.props.text}
      </Icon>
    );
  }

  render() {
    return (
      <button
        className={css(
          styles.button,
          this.props.sign ? styles.icon : styles.text,
          this.props.themeStyle
        )}
      >
        {this.props.sign ? this.iconButton() : this.textButton()}
      </button>
    );
  }
}
