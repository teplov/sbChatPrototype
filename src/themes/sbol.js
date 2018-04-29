import { StyleSheet } from 'aphrodite';
import deepmerge from 'deepmerge';
import { config } from '../config.js';

const avatarSize = 40;

let theme = StyleSheet.create({
  window: {
    border: 'none',
    minWidth: '360px',
    maxWidth: '300px',
    width: '320px',
    height: '400px',
    minHeight: '300px',
    maxHeight: '100vh'
  },

  header: {
    height: '35px',
    lineHeight: '35px',
    color: '#fff',
    backgroundColor: '#189F29',
    borderBottom: 'none',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    textAlign: 'left'
  },

  headerIcon: {
    margin: '0 2px',
    outline: 'none',
    cursor: 'default'
  },

  body: {
    backgroundColor: '#F8F8F8',
    borderLeft: '2px solid #189F29',
    borderRight: '2px solid #189F29',
    display: 'flex',
    flexDirection: 'column'
  },

  message: {
    margin: '1px 10px',
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0,
    flexWrap: 'wrap'
  },

  messageOne: {
    marginTop: '10px',
    marginBottom: '10px'
  },

  messageStart: {
    marginTop: '10px'
  },

  messageEnd: {
    marginBottom: '10px'
  },

  footer: {
    borderTop: '1px inset #eee',
    borderLeft: '2px solid green',
    borderRight: '2px solid green',
    borderBottom: '2px solid green',
    borderBottomLeftRadius: '6px',
    borderBottomRightRadius: '6px'
  },

  operatorTitle: {
    flex: '0 0 100%',
    textAlign: 'left',
    textIndent: '50px',
    fontWeight: 'bold',
    fontSize: '13px',
    color: '#3AB968',
    marginBottom: '5px'
  },

  avatar: {
    width: `${avatarSize}px`,
    height: `${avatarSize}px`,
    backgroundSize: '110%',
    flexGrow: 0,
    flexShrink: 0
  },

  bubble: {
    padding: '10px 15px',
    textAlign: 'left',
    maxWidth: '60%',
    minWidth: '20%',
    fontSize: '14px',
    lineHeight: '19px'
  },

  bubbleButton: {
    backgroundColor: '#2F9F13',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,.15)',
    height: '32px',
    fontSize: '14px',
    ':hover': {
      backgroundColor: '#3DBA1E'
    }
  },

  poOne: {
    borderRadius: '10px'
  },

  poStart: {
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    width: '60%'
  },

  poMiddle: {
    borderRadius: '0px',
    width: '60%'
  },

  poEnd: {
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    width: '60%'
  },

  poMiddleDir0: {
    borderRadius: '0px',
    width: '60%'
  },

  poEndDir0: {
    marginLeft: `${avatarSize + 10}px`,
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    width: '60%'
  },

  dir0: {
    backgroundColor: '#E6E6E6'
  },
  dir1: {
    backgroundColor: '#D6F4C9',
    marginLeft: 'auto'
  },

  suggest: {
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    borderLeft: '2px solid #189F29',
    borderRight: '2px solid #189F29',
    alignItems: 'center'
  },

  suggestButton: {
    flexGrow: 1,
    backgroundColor: '#ddd',
    borderRadius: '4px',
    //boxShadow: '0 2px 4px rgba(0,0,0,.15)',
    height: '32px',
    margin: '4px',
    minWidth: '10%',
    color: '#333',
    fontSize: '14px',
    ':hover': {
      backgroundColor: '#eee'
    }
  }
});

const theme_ld = StyleSheet.create({
  window: {
    maxHeight: '90vh',
    minHeight: '500px',
    position: 'fixed',
    bottom: '5px',
    right: '20px'
  }
});

const theme_md = StyleSheet.create({
  window: {
    position: 'fixed',
    height: 'auto',
    top: '5px',
    bottom: '5px',
    right: '5px'
  }
});

switch (config.displaySize) {
  case 'ld':
    theme = deepmerge(theme, theme_ld);
    break;
  case 'md':
    theme = deepmerge(theme, theme_md);
    break;
  case 'sd':
    break;
  default:
}

const sbol = theme;
export { sbol };
