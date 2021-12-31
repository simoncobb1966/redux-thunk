import React from 'react';
import isEmpty from '../../../utils/isEmpty';

const SimpleSelect = ({ items, display, funcOnChange }) => {

    return (
        isEmpty(items) ? null :
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
