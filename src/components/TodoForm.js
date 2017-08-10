import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosActions';

class TodoForm extends Component {
  render() {
    let todo = {
      title: ''
    };
    return (
      <div>
        <input type="text" onChange={e => {
          todo.title = e.target.value;
          }}/>
        <button onClick={() => this.props.dispatch(addTodo(todo))}>Add Todo</button>
      </div>
    )
  }
}

export default connect()(TodoForm);