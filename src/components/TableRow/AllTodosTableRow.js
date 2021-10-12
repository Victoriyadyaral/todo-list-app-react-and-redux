import React from 'react';
import PropTypes from 'prop-types';

import './TableRow.module.css'

const AllTodoTableRow = ({
    category,
    active,
    archived,
    total
}) => {
    return (

<tr key={category}>
    <td >{category}</td>
    <td >{active}</td>
    <td >{archived}</td>
    <td >{total}</td>
</tr>
    )
};

AllTodoTableRow.propTypes = {
    category: PropTypes.string.isRequired,
    active: PropTypes.number.isRequired,
    archived: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
}

export default   AllTodoTableRow;