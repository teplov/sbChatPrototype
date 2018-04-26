import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import theme from '../themes';
import { styles, css } from './styles.js';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className={css(styles.window, theme.window)}>
        <Header title={this.props.headerTitle} />
        <Body />
        <Footer />
      </div>
    );
  }
}

export { Header, Footer };
