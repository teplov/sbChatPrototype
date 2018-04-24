import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  input: {
    border: '1px solid #eee',
    flex: 1
  },
  inputDiv: {
    //borderTop: "2px solid #ccc",
    flex: 1,
    textAlign: 'left',
    padding: '10px',
    lineHeight: '20px',
    color: '#666',
    overflow: 'hidden',
    //maxHeight: '60px',
    minHeight: '20px',
    outline: 'none'
  },
  // grow: {
  //   background: 'yellow',
  //   ':after': {
  //     borderTop: '2px solid red',
  //     content: '111',
  //     width: '100%',
  //     height: '30px',
  //     position: 'absolute',
  //     left: '0px',
  //     top: '0px',
  //     right: '0px',
  //     cursor: 'text',
  //     background: 'linear - gradient(#fff, transparent)'
  //   }
  // },
  grow: {
    ':before': {
      content: '111'
    }
  }
});

export { styles, css };
