import React from 'react';
import PropTypes from 'prop-types';

const TodoTableColumn = ({ columns }) => {
    return (
        <tr>
            {columns.map((column, index) => (
                <td id={index}>{column}</td>
            ))}
        </tr>
    )
};

TodoTableColumn.propTypes = {
    columns: PropTypes.array,
}

export default TodoTableColumn;