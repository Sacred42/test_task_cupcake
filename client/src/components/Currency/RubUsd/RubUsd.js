import GetBaseCurrency from'../../GetBaseCurrency/GetBaseCurrency';

const EurUsd = ({currency}) => {
    const rowName = 'EUR/USD'
    return(
      <GetBaseCurrency currency={currency} rowName={rowName}/>
    )
}

export default EurUsd;