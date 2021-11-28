import React from 'react';

const SimpleSelect = ({ items, display, funcOnChange }) => {

    return (
        <select name='items' id='task'
            onChange={funcOnChange}
        >
            {items.map((item) => {
                return (
                    <option key={item.uuid} value={item.uuid}>{item[display]}
                    </option>
                )
            })}
        </select>
    )
};

export default SimpleSelect;
