import React from 'react';
import theme from '../themes';
import { styles, css } from './styles.js';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className={css(styles.header, theme.header)}>{this.props.title}</div>
    );
  }
}
