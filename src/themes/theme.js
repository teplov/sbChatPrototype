import { site } from './site.js';
import { sbol } from './sbol.js';
import { config } from '../config.js';

const themes = { site, sbol };
const theme = themes[config.theme];

export default theme;
