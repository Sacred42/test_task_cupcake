import GetBaseCurrency from'../../GetBaseCurrency/GetBaseCurrency';

const UsdCupCake = (props) => {
    const rowName = 'USD/CUPCAKE';
    return(
      <GetBaseCurrency currency = {props} rowName = {rowName}/>
    )
}

export default UsdCupCake;