import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  window: {
    border: "1px solid #eee",
    display: "flex",
    flexDirection: "column"
  },

  desktopSize: {
    minWidth: "360px",
    maxWidth: "300px",
    width: "320px",
    height: "400px",
    minHeight: "300px",
    maxHeight: "100vh"
  },

  header: {
    display: "flex",
    flexDirection: "row",
    height: "50px",
    borderBottom: "1px solid #ccc"
  },

  body: {
    color: "#000",
    flex: 1,
    overflowX: "hidden",
    overflowY: "scroll"
  },

  footer: {
    display: "flex",
    flexDirection: "row",
    //height: "30px",
    //minHeight: "30px",
    //maxHeight: "150px",
    borderTop: "1px solid #ccc"
  },

  small: {
    "@media (max-width: 600px)": {
      backgroundColor: "red"
    }
  }
});

export { styles, css };
