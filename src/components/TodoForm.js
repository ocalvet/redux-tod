import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosActions';
import { resetTodo, changeNewTodoTitle } from '../actions/newTodoActions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginLeft: 15,
};

class TodoForm extends Component {

  handleAddTodo(todo) {
    if (todo.title && todo.title.length > 3) {
      this.props.dispatch(addTodo(todo));
      this.props.dispatch(resetTodo(todo));
    }
  }

  render() {
    const { newTodo } = this.props;
    return (
      <div>
        <TextField
          hintText="Add the todo title"
          floatingLabelText="Todo title"
          value={newTodo.title}
          onChange={e => {
            this.props.dispatch(changeNewTodoTitle(e.target.value));
          }}
          onKeyUp={(e, v) => {
            if (e.keyCode === 13) {
              this.handleAddTodo(newTodo);
            };
          }}
        />
        <RaisedButton
          icon={<ContentAdd />}
          style={style}
          onClick={() => {
            this.handleAddTodo(newTodo);
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newTodo: state.newTodo
  };
}

export default connect(mapStateToProps)(TodoForm);