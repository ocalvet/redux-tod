import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoContainer from './components/TodoContainer';
import configureStore from './store/configureStore';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <TodoContainer />
      </Provider>
    );
  }
}

export default App;
