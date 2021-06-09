import React from 'react';
import './FullRow.css';
import ShortRow from '../ShortRow/ShortRow';
import LongRow from '../LongRow/LongRow';

const FullRow = ({rows:{firstRow , secondRow , thirdRow , fourthRow}}) => {
            
            return (
                <div className='full_row_container'>
                <LongRow firstRow={firstRow}/>
                <ShortRow secondRow={secondRow}/>
                <ShortRow thirdRow={thirdRow}/>
                <ShortRow fourthRow={fourthRow}/>
                </div>
            )
}

export default FullRow