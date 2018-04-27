import React from 'react';
import { styles, css } from './styles.js';

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div
        className={css(styles.avatar, this.props.themeStyle)}
        style={{
          backgroundImage: `url(${this.props.pic})`
        }}
      />
    );
  }
}
