import types from './action-type';
import todos from './initial-todos';

const todoReducer = (state = todos, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload]

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
      
    case types.UPDATE:
      //state.filter(({ id }) => id !== payload);
       return console.log('updated')

    case types.ARCHIVED:
      return state.map((todo) => todo.id === payload ? { ...todo, isArchived: !todo.isArchived } : todo);
      
    case types.UNARCHIVED:
      return state.map((todo) => todo.id === payload ? { ...todo, isArchived: !todo.isArchived } : todo);
    
    default:
      return state;
  }
};

export default todoReducer;