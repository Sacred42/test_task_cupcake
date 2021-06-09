const getCurrency = (values, nameCurrency) => {

const transArr = transformDates(values, nameCurrency );

return {
    firstCurrency : transArr[0],
    secondCurrency : transArr[1],
    thirdCurrency : transArr[2]
 }
}

const transformDates = (values , nameCurrency ) => {
   
    const sm = [values[0][nameCurrency], values[1][nameCurrency], values[2][nameCurrency]];
    const smaller = sm.reduce((a,b)=> a > b ? b : a);
    return sm.map((elem)=>{
        if(smaller === elem){
            return {
                value : elem,
                smaller : true
            }
        }
        return {
            value : elem,
            smaller : false
        }
    }) 
}



export {getCurrency}