import { config } from '../config.js';
import { site } from './site.js';
import { sbol } from './sbol.js';

const themes = { sbol, site };
const theme = themes[config.theme];

console.log(theme);

export default theme;
