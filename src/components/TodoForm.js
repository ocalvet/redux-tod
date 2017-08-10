import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    let todo = '';
    return (
      <div>
        <input type="text" onChange={e => {
          todo = e.target.value;
          }}/>
        <button onClick={() => this.props.onAddTodo(todo)}>Add Todo</button>
      </div>
    )
  }
}

export default TodoForm;