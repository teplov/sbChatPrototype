import React from 'react';
import { render } from 'react-dom';
import Window from './components/Window';
import { ChatIcons } from './components/Icon';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <div style={styles}>
    <ChatIcons />
    <Window headerTitle="Chat title" />
  </div>
);

render(<App />, document.getElementById('root'));
