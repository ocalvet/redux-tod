import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import { removeTodo } from '../actions/todosActions';

class TodoContainer extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        <AppBar title="Todo Application" />
        <Paper style={{ padding: 20, margin: 20 }}>
          <TodoForm></TodoForm>
          {todos.length > 0 ? <div>
            <List>
              <Subheader>List of Todos</Subheader>
              {todos.map(t => (
                <ListItem
                  key={t.id}
                  leftCheckbox={<Checkbox />}
                  primaryText={t.title}
                  rightIconButton={<IconButton tooltip="Remove" onClick={() => { this.props.dispatch(removeTodo(t.id))}}>
                    <ContentRemove />
                  </IconButton>}
                />))}
            </List>
          </div> : <Subheader>No Todos</Subheader>}
        </Paper>
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