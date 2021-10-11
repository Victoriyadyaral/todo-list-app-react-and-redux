import React, { Component } from 'react';
import Container from '../components/Container/Container';
import TodoEditor from '../components/TodoEditor/TodoEditor';
import Modal from '../components/Modal/Modal';
//import TodoTable from '../components/TodoTable/TodoTable';
//import IconButton from '../components/IconButton';

class TodosView extends Component {
  state = {
    showModal: false,
  };

  

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();

    return (
        <Container>
           <h1>TODO APP</h1>
          {/* <Stats total={totalTodoCount} completed={completedTodoCount} /> */}
          <button onClick={this.toggleModal} aria-label="Add todo">
                Add TODO
          </button>
 
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor />
          </Modal>
        )}
      </Container>
    );
  }
}

export default TodosView;