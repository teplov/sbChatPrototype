import React from 'react';
import { styles, css } from './styles.js';

export default class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div
        className={css(
          styles.bubble,
          styles['dir' + this.props.dir],
          this.props.themeStyle
        )}
      >
        {this.props.children}
      </div>
    );
  }
}
