import React from 'react';
import PropTypes from 'prop-types';


const TodoTableColumn = ({ columns }) => {
    return (
       
        <tr>
            {columns.map((column, index) => (
                <td key={index + 'column'}>{column}</td>
            ))}
        </tr>
    )
};

TodoTableColumn.propTypes = {
    columns: PropTypes.array,
}

export default TodoTableColumn;