import React from 'react';
import ShortRow from '../ShortRow/ShortRow';
import LongRow from '../LongRow/LongRow';
import './GetBaseCurrency.css';

const GetBaseCurrency = ({rowName , currency }) => {
            return (
            <div >
                {currency ? 
                <div className='base_row_container'>
                <LongRow firstRow={rowName }/>
                <ShortRow value = {currency.vallueCurency1}/>
                <ShortRow value = {currency.vallueCurency2}/>
                <ShortRow value = {currency.vallueCurency3}/>
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

export default GetBaseCurrency