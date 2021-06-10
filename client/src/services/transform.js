const getSortedCurrency = (values, nameCurrency) => {
    return values.map((elem)=>elem[nameCurrency]);
}

const transformBaseCurrency = (values) => {
 return getSmaller(values);
}

const getTransformCurrencyPair = (currency1, currency2) => {
 const arr = [];
 for(let i = 0; i < currency1.length; i++){
     for(let j = 0; j < currency2.length; j++){
         if(i === j){
             arr.push(currency1[i]/currency2[j]);
         }
     }
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

const setObj = (arr) => {
    const obj = {
    ...arr
    }
    let index = 0;
    const newObj = {}
    
    for(let el in obj){
     index += 1;
     newObj[`vallueCurency${index}`] = obj[el]
    }
    return newObj;
}



export {getSortedCurrency , getTransformCurrencyPair}