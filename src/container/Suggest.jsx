import React from "react";
import theme from "../themes";
import Button from "../components/Button";
import { styles, css } from "./styles.js";
import suggest from "../data/suggest.js";

export default class Suggest extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  textSuggest(text, index) {
    return (
      <Button
        key={"suggest_" + index}
        text={text}
        themeStyle={[
          styles.suggestButton,
          theme.suggestButton,
          theme.suggestText
        ]}
      />
    );
  }

  iconSuggest(sign, index) {
    return (
      <Button
        key={"suggest_" + index}
        sign={sign}
        color="white"
        size="20"
        themeStyle={[
          styles.suggestButton,
          theme.suggestButton,
          theme.suggestIcon
        ]}
      />
    );
  }

  getSuggest() {
    return suggest.map((item, index) => {
      return item.isText
        ? this.textSuggest(item.text, index)
        : this.iconSuggest(item.text, index);
    });
  }

  render() {
    return (
      <div className={css(styles.suggest, theme.suggest)}>
        {this.getSuggest()}
      </div>
    );
  }
}
