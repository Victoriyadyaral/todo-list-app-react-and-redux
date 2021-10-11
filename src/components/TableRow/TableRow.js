import React from 'react';
import PropTypes from 'prop-types';

const TodoTableColumn = ({ columns }) => {
    return (
        <tr>
            {columns.map(column => (
                <td>{column}</td>
            ))}
        </tr>
    )
};

TodoTableColumn.propTypes = {
    columns: PropTypes.array,
}