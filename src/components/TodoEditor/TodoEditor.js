import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';
import { ImPlus } from "react-icons/im";
import todosActions from '../../redux/actions';
import notifications from '../../js/notifications';
import s from './TodoEditor.module.css';

function TodoEditor({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('task');
    
  const titleInputId = shortid.generate();
  const contentInputId = shortid.generate();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
 
    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'content':
        setContent(value);
        break;
      
      case 'category':
        setCategory(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
      setTitle('');
      setContent('');
      setCategory('task')
    }

  const handleSubmit = e => {
    e.preventDefault();
    const newCategory = category.split(/-/).map(word => word[0]?.toUpperCase() + word.substring(1)).join(' ');
    onSubmit(title, content, newCategory);

    reset();
  };

    return (
    <form onSubmit = {handleSubmit}>
        <h3 className={s.formTitle}>Create a new ToDo</h3>
          <button type="submit" className={s.button}>
           Add todo  <ImPlus color="rgb(8, 99, 23)" size="15px"/>
        </button>
        <label htmlFor = {titleInputId} className={s.formLabel}>
            Title
          <input
            type="text"
            name="title"
            placeholder="Enter title your new todo"
            className={s.input}
            value={title}
            onChange = {handleChange}
            id={titleInputId}
            autoComplete = "off"
          />
        </label>
        <label htmlFor = {contentInputId} className={s.formLabel}>
            Content
          <input
            type="text"
            name="content"
            className={s.input}
            value={content}
            onChange = {handleChange}
            placeholder="Enter content your new todo"
            id={contentInputId}
            autoComplete = "off"
          />
           </label>
            <p className={s.formInfo}>Enter the date like dd.mm.yyyy</p>
        <label htmlFor="category" className={s.formLabel}>Category</label>
          <select
            id="category"
            name="category"
            aria-label="Default select example"
            onChange={handleChange}
            value={category}
          >
            <option className="add-todo__option" value="task">Task</option>
            <option className="add-todo__option" value="random-thought">Random Thought</option>
            <option className="add-todo__option" value="idea">Idea</option>
            <option className="add-todo__option" value="quote">Quote</option>
        </select>
    </form>
    );
}

const mapStateToProps = state => ({
  todos: state.todos, 
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (title, content, category) => {
    if (title === '' || content === '' || category === '') {
      return notifications.error();
    };
    dispatch(todosActions.addTodo(title, content, category));
    notifications.successAdd();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoEditor);