import React from 'react';
import PropTypes from 'prop-types';
import { ImBoxRemove } from "react-icons/im";

import './TableRow.module.css'

const TodoArchTableRow = ({
    id,
    title,
    created,
    category,
    onUnarchivedTodo
}) => {
    return (

<tr key={id}>
    <td >{title}</td>
    <td >{created}</td>
    <td >{category}</td>
    <td >
        <button type="button"  onClick={() => onUnarchivedTodo(id)}>
            <ImBoxRemove color="rgb(63, 14, 99)" size="20px"/>
        </button>
    </td>
</tr>
    )
};

TodoArchTableRow.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
}

export default   TodoArchTableRow;