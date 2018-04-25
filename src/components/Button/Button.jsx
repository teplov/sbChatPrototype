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

  render() {
    return (
      <button
        className={css(
          styles.button,
          this.props.sign ? styles.icon : styles.text
        )}
      >
        <Icon
          sign={this.props.sign}
          color={this.props.color}
          size={this.props.size}
        >
          {this.props.text}
        </Icon>
      </button>
    );

    // if (this.props.sign) {
    //   return (
    //     <Icon
    //       sign={this.props.sign}
    //       color={this.props.color}
    //       size={this.props.size}
    //     />
    //   );
    // } else {
    //   return <button className={css(styles.button)}>{this.props.text}</button>;
    // }
  }
}

//export { ButtonIcon, ButtonText };