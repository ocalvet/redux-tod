import React, { Component } from 'react';
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }
  render() {
    const todos = this.state.todos;
    console.log(todos);
    return (
      <div>
      <TodoForm onAddTodo={(todo) => this.setState({ todos: [todo, ...todos]})}/>
      {todos.map(todo => (
          <div>{todo}</div>
        ))}
      </div>
    );
  }
}

export default App;
