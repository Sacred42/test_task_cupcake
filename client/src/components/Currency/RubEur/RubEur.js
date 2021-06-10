import GetBaseCurrency from'../../GetBaseCurrency/GetBaseCurrency';

const EurEur = ({currency}) => {
    const rowName = 'EUR/EUR'
    return(
      <GetBaseCurrency currency={currency} rowName={rowName}/>
    )
}

export default EurEur;