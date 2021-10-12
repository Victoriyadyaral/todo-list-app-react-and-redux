import types from './action-type';
import todos from './initial-todos';

const todoReducer = (state = todos, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload]

    case types.DELETE: 
      return state.filter(({ id }) => id !== payload);
      
    case types.UPDATE:
    return  state.filter(todo => todo.id === payload);
    //state.map((todo) => todo.id === payload ? { ...todo, title: todo.title, content: todo } : todo);

    case types.ARCHIVED:
      return state.map((todo) => todo.id === payload ? { ...todo, isArchived: !todo.isArchived } : todo);
      
    case types.UNARCHIVED:
      return state.map((todo) => todo.id === payload ? { ...todo, isArchived: !todo.isArchived } : todo);
    
    default:
      return state;
  }
};

export default todoReducer;