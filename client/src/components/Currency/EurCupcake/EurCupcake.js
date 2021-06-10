import GetBaseCurrency from'../../GetBaseCurrency/GetBaseCurrency';

const EurCupCake = ({currency}) => {
    const rowName = 'EUR/CUPCAKE'
    return(
      <GetBaseCurrency currency={currency} rowName={rowName}/>
    )
}

export default EurCupCake;