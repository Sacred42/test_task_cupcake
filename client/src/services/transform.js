const getSortedCurrency = (values, nameCurrency) => {

const transArr = transformDates(values, nameCurrency );

return transArr;
}

const transformDates = (values , nameCurrency) => {
   return [values[0][nameCurrency], values[1][nameCurrency], values[2][nameCurrency]];
}

const transformBaseCurrency = (values) => {
 console.log(values , 'должен быть массив')
 return getSmaller(values);
}

const getTransformCurrencyPair = (currency1, currency2) => {
 console.log(currency1 , currency2 , 'два массива');
 const arr = [];
 for(let i = 0; i < currency1.length; i++){
     for(let j = 0; j < currency2.length; j++){
         if(i === j){
             arr.push(currency1[i]/currency2[j]);
         }
     }
 }
 return getSmaller(arr);
}

const getSmaller = (values) => {
    const smaller = values.reduce((a,b)=> a > b ? b : a);
    const getWithSmaller =  values.map((elem)=>{
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
    
    return setObj(getWithSmaller);
}

const setObj = (arr) => {
    const obj = {
    ...arr
    }
    console.log(obj)
    let index = 0;
    const newObj = {}
    
    for(let el in obj){
     index += 1;
     newObj[`vallueCurency${index}`] = obj[el]
    }
    return newObj;
}





export {getSortedCurrency , getTransformCurrencyPair , transformBaseCurrency}