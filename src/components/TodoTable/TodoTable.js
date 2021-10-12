import { ImPencil, ImBoxAdd, ImBin } from "react-icons/im";
import  TodoNotArchTableRow from '../TableRow/notArchivTableRow';

import TodoTableColumn from "../TableColumn/TableColum";
import './TodoTable.module.css'

const notArchivedColums = ['Title', 'Created', 'Category', 'Content', 'Dates', <ImPencil />, <ImBoxAdd />, <ImBin />]

const TodoTable = ({ todos, onDeleteTodo, onArchivedTodo, onUpdateTodo }) => {
    
    return (
    <>
        {todos.length > 0 ? (
            <table>
            <thead>
            <TodoTableColumn columns={notArchivedColums} />
            </thead>
            <tbody >
                {todos.map(({ id, title, created, category, content, dates }) => (
                    <TodoNotArchTableRow
                        key={id}
                        id={id}
                        title={title}
                        created={created}
                        category={category}
                        content={content}
                        dates={dates}
                        onDeleteTodo={onDeleteTodo}
                        onArchivedTodo={onArchivedTodo}
                        onUpdateTodo={onUpdateTodo}
                    />
                ))}
            </tbody>
        </table>
            )
            :
            <h3>You don`t have any active notes</h3>}
    </>
    );

};

export default TodoTable;