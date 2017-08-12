import React from 'react';
import { connect } from  'react-redux';
import Checkbox from 'material-ui/Checkbox';
import { filterCompleted as onFilterCompleted } from '../actions/filterActions';

const TodoFilter = ({ filterCompleted, dispatch }) => {
  return (
    <Checkbox style={{marginTop: 20}} checked={filterCompleted} label="Filter completed" onCheck={() => dispatch(onFilterCompleted())}/>
  );
}

const mapStateToProps = (state) => {
  return {
    filterCompleted: state.filter.filterCompleted
  };
}

export default connect(mapStateToProps)(TodoFilter);