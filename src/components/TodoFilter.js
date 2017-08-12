import React from 'react';
import { connect } from  'react-redux';
import Checkbox from 'material-ui/Checkbox';
import { filterCompleted as onFilterCompleted } from '../actions/filterActions';

const TodoFilter = ({ filterCompleted, dispatch }) => {
  const filterLabel = "Filter completed todos"
  return (
    <Checkbox style={{marginTop: 20}} checked={filterCompleted} label={filterLabel} onCheck={() => dispatch(onFilterCompleted())}/>
  );
}

const mapStateToProps = (state) => {
  return {
    filterCompleted: state.filter.filterCompleted
  };
}

export default connect(mapStateToProps)(TodoFilter);