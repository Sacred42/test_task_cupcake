import GetBaseCurrency from'../../GetBaseCurrency/GetBaseCurrency';

const EurCupCake = (props) => {
    const rowName = 'EUR/CUPCAKE'
    return(
      <GetBaseCurrency currency={props} rowName={rowName}/>
    )
}

export default EurCupCake;