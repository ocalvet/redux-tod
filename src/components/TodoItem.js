import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import { removeTodo, completeTodo } from '../actions/todosActions';

const TodoItem = ({ todo, dispatch }) => {
  return (
    <ListItem
      leftCheckbox={<Checkbox checked={todo.completed} onCheck={() => { dispatch(completeTodo(todo.id)) }} />}
      primaryText={todo.title}
      rightIconButton={<IconButton tooltip="Remove" onClick={() => { dispatch(removeTodo(todo.id)) }}>
        <ContentRemove />
      </IconButton>}
    />
  );
}

export default connect()(TodoItem);