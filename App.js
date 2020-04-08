import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Nav from './src/navigation';

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
);
export default App;
