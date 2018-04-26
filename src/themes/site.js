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
