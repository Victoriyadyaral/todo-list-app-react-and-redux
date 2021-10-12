import React, { useState, useEffect } from 'react';
import { Switch, NavLink, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import todoActions from '../../redux/actions';
import notifications from '../../js/notifications';

import TodoEditor from '../../components/TodoEditor/TodoEditor';
import Modal from '../../components/Modal/Modal';
import TodoTable from '../../components/TodoTable/TodoTable';
import ArchivedTodosPage from '../ArchivedTodosPage';
import AllTodosPage from '../AllTodosPage';
import Button from '../../components/Button/Button';

import s from "./TodoPage.module.css";


function TodosPage({ todos,  onDeleteTodo, onArchivedTodo, onUnarchivedTodo, onUpdateTodo }) {
  const [showModal, setShowModal] = useState(false);
  const [todoId, setTodoId] = useState('');
  const [updatedTodo, setUpdatedTodo] = useState({})
  const location = useLocation();
  const history = useHistory();

  const archivedTodos = todos ? todos.filter(todo => todo.isArchived === true) : [];
  const unArchivedTodos = todos ? todos.filter(todo => todo.isArchived === false) : [];

  const toggleModal = () => {
    setShowModal( !showModal);
  };

  useEffect(() => {
    if (todoId === '') {
      return;
     }
    const todo = unArchivedTodos.find(todo => todo.id === todoId);

    setUpdatedTodo(todo);
    toggleModal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoId]);

  const onUpdateTodos = (id) => {
    setTodoId(id)
  }

  function onGoBack() {
    history.push('/');
  }

  function onDeleteTodoInRow(id) {
    onDeleteTodo(id);
    notifications.warning();
  }

    return (
        <>
        <h1>TODO APP</h1>
        <div className={s.buttonWrap}>
        <Button buttonName={'Go back'} onClick={onGoBack} />
        <Button buttonName={'Add TODO'} onClick={toggleModal} />
        </div>
        <TodoTable
          todos={unArchivedTodos}
          onDeleteTodo={onDeleteTodoInRow}
          onArchivedTodo={onArchivedTodo}
          onUpdateTodo={onUpdateTodos}
        />
        <div>
        <NavLink
          to={{
                  pathname: '/archived',
                  state: {
                    from: location.state ? location.state.from : '/',
                  },
                }}
          className={s.link}
          activeClassName={s.activeLink}
        >
         Archived Todos
        </NavLink>
        <NavLink
          to={{
                  pathname: '/total',
                  state: {
                    from: location.state ? location.state.from : '/',
                  },
                }}
          className={s.link}
          activeClassName={s.activeLink}
        >
         All todos
        </NavLink>
      </div>

      
      <Switch>
      <Route path={'/archived'} exact>
            <ArchivedTodosPage
              todos={archivedTodos}
              onUnarchivedTodo={onUnarchivedTodo}
            />
      </Route>

      <Route path={'/total'} exact>
            <AllTodosPage
              todos={todos}
            />
        </Route>
      <Redirect to="/" /> 
      </Switch>
      
        {showModal && (
          <Modal onClose={toggleModal}>
            <TodoEditor updatedTodo={updatedTodo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo} />
          </Modal>
        )}
      </>
    );
}


const mapStateToProps = ( todos ) => ({
 todos
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: (id) => dispatch(todoActions.deleteTodo(id)),
  onArchivedTodo: (id) => dispatch(todoActions.archivedTodo(id)),
  onUnarchivedTodo: (id) => dispatch(todoActions.unArchivedTodo(id)),
  onUpdateTodo: (id) => dispatch(todoActions.updateTodo(id)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);