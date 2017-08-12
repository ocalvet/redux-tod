import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';

class TodoContainer extends Component {
  render() {
    const { todos, filterCompleted } = this.props;
    const filteredTodos = filterCompleted ? todos.filter(t => !t.completed) : todos;
    return (
      <div>
        <AppBar showMenuIconButton={false} title="Todo Application" />
        <Paper style={{ padding: 20, margin: 20 }}>
          <TodoForm></TodoForm>
          {filteredTodos.length > 0 ? <div>
            <List>
              <Subheader>List of Todos</Subheader>
              {filteredTodos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
                ))}
            </List>
          </div> : <Subheader>No Todos</Subheader>}
          <Divider />
          <TodoFilter />
        </Paper>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filterCompleted: state.filter.filterCompleted
  };
}
export default connect(mapStateToProps)(TodoContainer);