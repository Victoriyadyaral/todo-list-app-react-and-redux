import React from 'react';
import PropTypes from 'prop-types';
import { ImPencil, ImBoxAdd, ImBin } from "react-icons/im";

import './TableRow.module.css'

const TodoNotArchTableRow = ({
    id,
    title,
    created,
    category,
    content,
    dates,
    onDeleteTodo,
    onArchivedTodo,
    onUpdateTodo
}) => {
    return (

<tr key={id}>
    <td >{title}</td>
    <td >{created}</td>
    <td >{category}</td>
    <td >{content}</td>
    <td >{dates}</td>
    <td >
        <button type="button" onClick={() => onUpdateTodo()}>
          <ImPencil color="rgb(63, 14, 99)" size="20px"/>
        </button>
    </td>
    <td >
        <button type="button"  onClick={() => onArchivedTodo(id)}>
            <ImBoxAdd color="rgb(63, 14, 99)" size="20px"/>
        </button>
    </td>
    <td >
        <button type="button" onClick={() => onDeleteTodo(id)}>
            <ImBin color="rgb(63, 14, 99)" size="20px"/>
        </button>
    </td>
</tr>
    )
};

TodoNotArchTableRow.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    dates: PropTypes.array
}

export default  TodoNotArchTableRow;