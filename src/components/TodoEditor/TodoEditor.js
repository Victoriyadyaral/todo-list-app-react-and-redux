import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';
import { ImPlus } from "react-icons/im";
import todosActions from '../../redux/actions';
// import './TodoEditor.scss';

function TodoEditor({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('idea');
    
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
      setCategory({ value: 'idea' })
    }

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(title, content, category);

    reset();
  };

    return (
      <section className="container">
    <form className="add-todo__form" onSubmit = {handleSubmit}>
        <h2 className="add-todo__text">Create a new ToDo</h2>
        <button type="submit" className="add-todo__btn btn button" id="addTodo">
           Add todo  <ImPlus color="rgb(11, 100, 11)" size="30px"/>
        </button>
        <label htmlFor = {titleInputId}>
            Title
          <input
            type="text"
            name="title"
            placeholder="Add title your new todo"
            // className={s.input}
            value={title}
            onChange = {handleChange}
            id={titleInputId}
            autoComplete = "off"
          />
        </label>
        <label htmlFor = {contentInputId}>
            Content
          <input
            type="text"
            name="content"
            // className={s.input}
            value={content}
            onChange = {handleChange}
            placeholder="Add content your new todo"
            id={contentInputId}
            autoComplete = "off"
          />
           </label>
            <p>Enter the date like dd.mm.yyyy</p>
        <label htmlFor="category">Category</label>
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
</section>
    );
}

const mapStateToProps = state => ({
  todos: state.todos, 
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (title, content, category) => dispatch(todosActions.addTodo(title, content, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoEditor);