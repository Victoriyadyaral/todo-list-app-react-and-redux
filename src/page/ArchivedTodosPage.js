import React from 'react';
import  PropTypes  from 'prop-types';
import { ImBoxRemove } from "react-icons/im";
import TodoTableColumn from '../components/TableColumn/TableColum';
import  TodoArchTableRow  from '../components/TableRow/ArchivedTableRow';

const archivedColums = ['Title', 'Created', 'Category', <ImBoxRemove />]

export default function ArchivedTodosPage({ todos, onUnarchivedTodo }) {
  
    return (
        <section>
            <h2>Archived Todos</h2>
           {todos.length > 0 ? (
            <table>
            <thead>
            <TodoTableColumn columns={archivedColums} />
            </thead>
            <tbody >
                {todos.map(({ id, title, created, category }) => (
                    <TodoArchTableRow
                        key={id}
                        id={id}
                        title={title}
                        created={created}
                        category={category}
                        onUnarchivedTodo={onUnarchivedTodo}
                    />
                ))}
            </tbody>
        </table>
            )
            :
            <h3>You don`t have any archived notes</h3>}
        </section>
    )
};

ArchivedTodosPage.propTypes = {
  todos: PropTypes.array,
  onUnarchivedTodo: PropTypes.func.isRequired
}
