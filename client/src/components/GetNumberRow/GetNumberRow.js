import React, {useEffect, useState} from 'react';
import ShortRow from '../ShortRow/ShortRow';
import LongRow from '../LongRow/LongRow';
import './GetNumberRow.css';

const GetNumberRow = ({currency : {currency}}) => {
            const firstRow = 1;
            const [classSmaller , setClassSmaller] = useState('mark_row');
            return (
            <div >
                {currency ? 
                <div className='full_row_container'>
                <LongRow firstRow={firstRow}/>
                <ShortRow value = {currency.firstCurrency}/>
                <ShortRow value = {currency.secondCurrency}/>
                <ShortRow value = {currency.thirdCurrency}/>
                {/* <LongRow firstRow={firstRow}/>
                <ShortRow secondRow={1}/>
                <ShortRow thirdRow={1}/>
                <ShortRow fourthRow={1}/> */}
                </div>
                :<div></div>
            }
                
            </div>
            )

}

export default GetNumberRow