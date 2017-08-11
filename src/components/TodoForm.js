import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosActions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginLeft: 15,
};

class TodoForm extends Component {
  render() {
    let todo = {
      title: ''
    };
    return (
      <div>
        <TextField
          hintText="Add the todo title"
          floatingLabelText="Todo title"
          onChange={e => {
            todo.title = e.target.value;
          }}
        />
        <RaisedButton
          icon={<ContentAdd />}
          style={style}
          onClick={() => this.props.dispatch(addTodo(todo))}
        />
      </div>
    )
  }
}

export default connect()(TodoForm);