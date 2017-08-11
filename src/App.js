import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TodoContainer from './components/TodoContainer';
import configureStore from './store/configureStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const appTheme = getMuiTheme(theme);

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <MuiThemeProvider  muiTheme={appTheme}>
          <TodoContainer />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
