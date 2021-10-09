import notifications from '../js/notifications';
import types from './action-type';
import todos from '../js/todos';

const items = (state = todos, { type, payload }) => {
  switch (type) {
    case types.ADD:
      notifications.success();
      return [...state, payload]

    case types.DELETE:
      notifications.warning();
       return state.filter(({ id }) => id !== payload);
      
    // case types.UPDATE:
    //    return state.filter(({ id }) => id !== payload);

    // case types.ARCHIVED:
    //     return state.filter(({ id }) => id !== payload);
      
    // case types.UNARCHIVED:
    // return state.filter(({ id }) => id !== payload);
    
    default:
      return state;
  }
};

export default items;