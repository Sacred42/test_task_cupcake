import GetBaseCurrency from'../../GetBaseCurrency/GetBaseCurrency';

const EurUsd = (props) => {
    const rowName = 'EUR/USD'
    return(
      <GetBaseCurrency currency={props} rowName={rowName}/>
    )
}

export default EurUsd;