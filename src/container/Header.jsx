import React from 'react';
import theme from '../themes';
import Button from '../components/Button';
import { styles, css } from './styles.js';

import { config } from '../config.js';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className={css(styles.header, theme.header)}>
        <Button
          sign="speechBubbles"
          color="white"
          size="20"
          themeStyle={theme.headerIcon}
        />
        {config[config.theme].headerTitle}
        <Button
          sign="minimize"
          color="white"
          size="20"
          themeStyle={theme.headerIcon}
        />
        <Button
          sign="close"
          color="white"
          size="20"
          themeStyle={theme.headerIcon}
        />
      </div>
    );
  }
}
