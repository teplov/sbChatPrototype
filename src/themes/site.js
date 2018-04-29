import { StyleSheet } from 'aphrodite';
import deepmerge from 'deepmerge';
import { config } from '../config.js';

const avatarSize = 40;

let theme = StyleSheet.create({
  window: {
    width: '340px',
    height: '600px',
    position: 'fixed',
    right: '30px',
    bottom: '60px',
    boxShadow: '0px 0px 10px rgba(0,0,0,.2)'
  },
  header: {
    height: '50px',
    lineHeight: '50px',
    fontSize: '1.7rem',
    fontWeight: '300',
    borderBottom: 'none'
  },
  body: {
    display: 'flex',
    flexDirection: 'column'
  },
  message: {
    margin: '0px 10px',
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

  messageMiddle: {
    marginTop: '1px'
  },

  messageEnd: {
    marginTop: '1px',
    marginBottom: '10px'
  },

  operatorTitle: {
    flex: '0 0 100%',
    textAlign: 'left',
    textIndent: '50px',
    fontWeight: 'bold',
    fontSize: '14px',
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
    fontSize: '0.9rem'
  },

  bubbleButton: {
    backgroundColor: '#666',
    borderRadius: '10px',
    height: '32px',
    color: '#eee',
    fontSize: '14px',
    ':hover': {
      backgroundColor: '#999'
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
    backgroundColor: '#eee'
  },
  dir1: {
    backgroundColor: '#404040',
    color: '#EEE',
    fontFamily: 'OpenSans, sans-serif',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.43',
    letterSpacing: 'normal',
    textAlign: 'left',
    marginLeft: 'auto'
  },
  suggest: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },

  suggestButton: {
    flexGrow: 1,
    backgroundColor: '#eee',
    borderRadius: '10px',
    //boxShadow: '0 2px 4px rgba(0,0,0,.15)',
    height: '32px',
    margin: '6px',
    minWidth: '10%',
    color: '#333',
    fontSize: '14px',
    ':hover': {
      backgroundColor: '#f3f3f3'
    }
  }
});
const theme_ld = StyleSheet.create({});
const theme_md = StyleSheet.create({});

const theme_sd = StyleSheet.create({
  window: {
    width: '100vw',
    height: '100%',
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px'
  },

  message: {
    margin: '0px 15px'
  },

  suggest: {
    display: 'inline-block',
    height: '50px',
    whiteSpace: 'nowrap',
    overflowY: 'hidden',
    overflowX: 'visible'
  },

  suggestButton: {}
});

switch (config.displaySize) {
  case 'ld':
    theme = deepmerge(theme, theme_ld);
    break;
  case 'md':
    theme = deepmerge(theme, theme_md);
    break;
  case 'sd':
    theme = deepmerge(theme, theme_sd);
    break;
  default:
}

const site = theme;

export { site };
