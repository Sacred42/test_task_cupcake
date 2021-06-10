const getSortedCurrency = (values, nameCurrency) => {

const transArr = transformDates(values, nameCurrency );

return {
    firstCurrency : transArr[0],
    secondCurrency : transArr[1],
    thirdCurrency : transArr[2]
 }
}

const transformDates = (values , nameCurrency ) => {
   
    const arrSpecificValues = [values[0][nameCurrency], values[1][nameCurrency], values[2][nameCurrency]];
    const smaller = arrSpecificValues.reduce((a,b)=> a > b ? b : a);
    return arrSpecificValues.map((elem)=>{
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

const getTransformCurrencyPair = (firstCurrency , secondCurrency) => {
 
  console.log(firstCurrency , secondCurrency);
  console.log('отношение')
  return {value : firstCurrency/secondCurrency};
}



export {getSortedCurrency , getTransformCurrencyPair}