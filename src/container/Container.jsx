import React from 'react';
import Header from './Header';
import Suggest from './Suggest';
import Footer from './Footer';
import Body from './Body';
import theme from '../themes';
import { styles, css } from './styles.js';

import { config } from '../config.js';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  sbolContainer() {
    return (
      <div className={css(styles.window, theme.window)}>
        <Header />
        <Body />
        <Suggest />
        <Footer />
      </div>
    );
  }

  siteContainer() {
    return (
      <div className={css(styles.window, theme.window)}>
        <Header />
        <Body />
        <Suggest />
        <Footer />
      </div>
    );
  }

  render() {
    return config.theme === 'site'
      ? this.siteContainer()
      : this.sbolContainer();
  }
}

export { Header, Footer };
