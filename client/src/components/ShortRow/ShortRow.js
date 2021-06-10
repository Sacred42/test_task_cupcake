import React, {useState, useEffect} from 'react';
import './ShortRow.css';

const ShortRow = (props) => {
    const [valueDiv , setValueDiv] = useState(null);
    const [smaller, setSmaller] = useState(false);
    const classMark  = 'mark_row';
    useEffect(()=>{
        {
            const {value , smaller} = props.value;
            setValueDiv(value);
            setSmaller(smaller);
        }
        return ()=>{
            setValueDiv(null);
            setSmaller(false);
        }
    },[props])
   
    
    return (
        <div className={`short_row_size  ${smaller ? classMark : ''}`}>{valueDiv}</div>
    )
}

export default ShortRow;