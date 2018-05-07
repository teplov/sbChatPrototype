import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  window: {
    border: '1px solid #eee',
    display: 'flex',
    flexDirection: 'column'
  },

  desktopSize: {
    minWidth: '360px',
    maxWidth: '300px',
    width: '320px',
    height: '400px',
    minHeight: '300px',
    maxHeight: '100vh'
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    height: '50px',
    borderBottom: '1px solid #ccc'
  },

  message: {
    marginLeft: '10px',
    marginRight: '10px'
  },

  bubble: {
    display: 'flex'
  },

  bubbleText: {
    margin: '10px 20px'
  },

  bubbleButtons: {
    // display: 'flex',
    // flexDirection: 'column',
    margin: '10px 0px'
  },

  bubbleButton: {
    margin: '2px',
    border: 'none',
    borderRadius: '20px',
    backgroundColor: 'grey',
    color: '#fff',
    lineHeight: '20px',
    fontSize: '12px'
  },

  bubbleText: {
    flex: 1
  },

  bubbleStatus: {
    //flex: 0,
    alignSelf: 'flex-end'
  },

  body: {
    color: '#000',
    flex: 1,
    overflowX: 'hidden',
    overflowY: 'scroll'
  },

  suggest: {
    margin: '0.2rem'
  },

  suggestButton: {
    border: 'none',
    margin: '0.2rem'
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #ccc'
  },

  small: {
    '@media (max-width: 600px)': {
      backgroundColor: 'red'
    }
  }
});

export { styles, css };
