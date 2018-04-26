import React from "react";
import theme from "../themes";
import Bubble from "../components/Bubble";
import { styles, css } from "./styles.js";

import chat from "/data/conversation.js";

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  getChat() {
    return chat.map(item => (
      <Bubble
        themeStyle={[theme.bubble, theme["dir" + item.dir]]}
        dir={item.dir}
        text={item.text}
      />
    ));
  }

  render() {
    return <div className={css(styles.body, theme.body)}>{this.getChat()}</div>;
  }
}
