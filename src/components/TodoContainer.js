import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';

class TodoContainer extends Component {
  render() {
    const { todos } = this.props; 
    return (
      <div>
        <TodoForm></TodoForm>
        {todos.map(t => (<div key={t.id}>{t.title}</div>))}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}
export default connect(mapStateToProps)(TodoContainer);