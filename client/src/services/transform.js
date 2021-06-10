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
    let index = 0;
    const newObj = {}
    
    for(let el in obj){
     index += 1;
     newObj[`vallueCurency${index}`] = obj[el]
    }
    return newObj;
}





export {getSortedCurrency , getTransformCurrencyPair , transformBaseCurrency}