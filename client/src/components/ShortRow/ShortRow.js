import React from 'react';
import './ShortRow.css';

const ShortRow = (props) => {
    const rowValue = Object.values(props);
    return (
        <div className='short_row_size'>{rowValue[0]}</div>
    )
}

export default ShortRow;