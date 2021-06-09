import React, {useState, useEffect} from 'react';
import './ShortRow.css';

const ShortRow = (props) => {
    const [valueDiv , setValueDiv] = useState(null);
    const [smaller, setSmaller] = useState(false);
    const classMark  = 'mark_row';
    useEffect(()=>{
        if(typeof props.value === 'object'){
            const {value , smaller} = props.value;
            setValueDiv(value);
            setSmaller(smaller);
        }
        else{
          setValueDiv(props.value)
        }
        return ()=>{
            setValueDiv(null);
            setSmaller(false);
        }
    },[])
   
    
    return (
        <div className={`short_row_size  ${smaller ? classMark : ''}`}>{valueDiv}</div>
    )
}

export default ShortRow;