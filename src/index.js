import React from 'react';
import { render } from 'react-dom';
import Container from './container';
import { ChatIcons } from './components/Icon';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <div style={styles}>
    <ChatIcons />
    <Container headerTitle="Сбербанк" />
  </div>
);

render(<App />, document.getElementById('root'));
