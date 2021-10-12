import React from 'react';
import  PropTypes  from 'prop-types';
import TodoTableColumn from '../components/TableColumn/TableColum';
import  AllTodoTableRow  from '../components/TableRow/AllTodosTableRow';

const allTodosColums = ['Note Category', 'Active', 'Archived', 'Total']

export default function AllTodosPage({ todos }) {
    
    const categoryList = (arr) => {
    const allCategoryList = arr.map(todo => todo.category);
    return Array.from(new Set(allCategoryList))
    }

    const countTodoInCategory = (todoCategory, list) => {
    const allTodosInCategory = list.filter(item => item.category === todoCategory );
    const archivedTodosInCategory = allTodosInCategory.filter(item => item.isArchived).length;
    const numOfAllTodos = allTodosInCategory.length
    
    return ({
        category: todoCategory,
        total: numOfAllTodos,
        archived: archivedTodosInCategory,
        active: numOfAllTodos - archivedTodosInCategory
    })
    }
        
    const todoByCategory = ( list) => {
    return categoryList(list).map(el => countTodoInCategory(el, list));
    }
    
    return (
        <section>
            <h2>All your Todos</h2>
           {todos.length > 0 ? (
            <table>
            <thead>
            <TodoTableColumn columns={allTodosColums} />
            </thead>
            <tbody >
                {todoByCategory(todos).map(({ category, active, archived, total }) => (
                    <AllTodoTableRow
                        key={category}
                        category={category}
                        active={active}
                        archived={archived}
                        total={total}
                    />
                ))}
            </tbody>
        </table>
            )
            :
            <h3>You don`t have any notes</h3>}
        </section>
    )
};

AllTodosPage.propTypes = {
  todos: PropTypes.array,
}
