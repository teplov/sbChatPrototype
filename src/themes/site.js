import { StyleSheet } from 'aphrodite';
import deepmerge from 'deepmerge';
import { config } from '../config.js';

let theme = StyleSheet.create({
  window: {
    width: '340px',
    height: '500px',
    position: 'fixed',
    right: '30px',
    bottom: '60px',
    boxShadow: '0px 0px 10px rgba(0,0,0,.2)'
  },
  header: {
    height: '50px',
    lineHeight: '50px',
    fontSize: '2rem',
    fontWeight: '300',
    borderBottom: 'none'
  },
  body: {
    display: 'flex',
    flexDirection: 'column'
  },

  message: {
    margin: '5px 15px',
    display: 'flex',
    flexGrow: 0,
    flexShrink: 0
  },

  avatar: {
    width: '40px',
    height: '40px',
    backgroundSize: '110%',
    flexGrow: 0,
    flexShrink: 0
  },

  bubble: {
    padding: '10px 20px',
    borderRadius: '10px',
    textAlign: 'left',
    maxWidth: '70%',
    minWidth: '20%',
    fontSize: '14px'
  },
  dir0: {
    backgroundColor: '#F2F2F2'
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
  }
});
const theme_ld = StyleSheet.create({});
const theme_md = StyleSheet.create({});

const theme_sd = StyleSheet.create({
  window: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px'
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
    theme = deepmerge(theme, theme_sd);
    break;
  default:
}

const site = theme;

export { site };
