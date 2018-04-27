import React from 'react';
import { styles, css } from './styles.js';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={css(styles.title, this.props.themeStyle)}>
        {this.props.text}
      </div>
    );
  }
}
