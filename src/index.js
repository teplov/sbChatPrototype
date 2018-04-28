import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container';
import store from './store';
import { ChatIcons } from './components/Icon';

const styles = {
  fontFamily: 'sans-serif'
  //textAlign: 'center'
};

const App = () => (
  <div style={styles}>
    <ChatIcons /> {/* загружаем компонент со всеми иконками */}
    <Container headerTitle="Сбербанк" />
  </div>
);

//render(<App />, document.getElementById('root'));

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};
render();
store.subscribe(render);
