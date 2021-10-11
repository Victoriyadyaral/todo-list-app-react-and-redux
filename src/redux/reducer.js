import types from './action-type';
import todos from './initial-todos';

const todoReducer = (state = todos, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload]

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
      
    // case types.UPDATE:
    //    return state.filter(({ id }) => id !== payload);

    case types.ARCHIVED:
      return state.map((todo) => {
        if (todo.id === payload) {
          todo.isArchived = true;
        }
        return state;
      });
      
    case types.UNARCHIVED:
    return state.map((todo) => {
        if (todo.id === payload) {
          todo.isArchived = false;
      }
      return state;
      });
    
    default:
      return state;
  }
};

export default todoReducer;