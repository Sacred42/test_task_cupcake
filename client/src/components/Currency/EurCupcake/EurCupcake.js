import GetBaseCurrency from'../../GetBaseCurrency/GetBaseCurrency';

const EurCupCake = ({currency}) => {
  console.log(currency, "этот пропс")
    const rowName = 'EUR/CUPCAKE'
    return(
      <GetBaseCurrency currency={currency} rowName={rowName}/>
    )
}

export default EurCupCake;