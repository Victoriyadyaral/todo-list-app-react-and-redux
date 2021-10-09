import shortid from 'shortid';
import types from './action-type';
import { getCurrentDay, getDatesFromStr } from '../js/get-date';

const addTodo = (contentText, titleText, categoryOption) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    content: contentText,
    created: getCurrentDay(),
    isArchived: false,
    title: titleText,
    category: categoryOption,
    dates: [getDatesFromStr(contentText)]
  },
});

const deleteTodo = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

const archivedTodo = todoId => ({
  type: types.ARCHIVED,
  payload: todoId,
});

const unArchivedTodo = todoId => ({
  type: types.UNARCHIVED,
  payload: todoId,
});

const updateTodo = todoId => ({
  type: types.UPDATE,
  payload: todoId,
});

export default { addTodo, deleteTodo, archivedTodo, unArchivedTodo, updateTodo };