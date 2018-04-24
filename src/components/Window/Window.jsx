import React from "react";
import WindowHeader from "./WindowHeader";
import WindowFooter from "./WindowFooter";
import WindowBody from "./WindowBody";
import { styles, css } from "./styles.js";

export default class Window extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className={css(styles.desktopSize, styles.window)}>
        <WindowHeader title={this.props.headerTitle} />
        <WindowBody />
        <WindowFooter />
      </div>
    );
  }
}

export { WindowHeader, WindowFooter };
