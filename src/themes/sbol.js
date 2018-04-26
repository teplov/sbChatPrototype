import { StyleSheet } from 'aphrodite';
import deepmerge from 'deepmerge';
import { config } from '../config.js';

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
    backgroundColor: 'green',
    borderBottom: 'none',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    textAlign: 'left'
  },

  headerIcon: {
    margin: '6px',
    outline: 'none',
    cursor: 'default'
  },

  body: {
    borderLeft: '2px solid green',
    borderRight: '2px solid green'
  },

  footer: {
    borderTop: '1px inset #eee',
    borderLeft: '2px solid green',
    borderRight: '2px solid green',
    borderBottom: '2px solid green'
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
