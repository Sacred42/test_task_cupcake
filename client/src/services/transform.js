const getCurrency = (values, nameCurrency) => {
return {
    firstCurrency : values[0][nameCurrency],
    secondCurrency : values[1][nameCurrency],
    thirdCurrency : values[2][nameCurrency]
 }
}



export {getCurrency}