import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  bubble: {
    padding: "20px 10px",
    borderRadius: "10px",
    margin: "10px 20px  ",
    textAlign: "left",
    maxWidth: "80%",
    minWidth: "20%"
  },
  dir0: {
    backgroundColor: "#eee",
    float: "left",
    clear: "both"
  },
  dir1: {
    backgroundColor: "#ddd",
    float: "right",
    clear: "both"
  }
});

export { styles, css };
