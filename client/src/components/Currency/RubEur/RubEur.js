import GetBaseCurrency from'../../GetBaseCurrency/GetBaseCurrency';

const EurEur = (props) => {
    const rowName = 'EUR/EUR'
    return(
      <GetBaseCurrency currency={props} rowName={rowName}/>
    )
}

export default EurEur;