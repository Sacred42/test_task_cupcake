import GetBaseCurrency from'../../GetBaseCurrency/GetBaseCurrency';

const UsdCupCake = ({currency}) => {
    const rowName = 'USD/CUPCAKE';
    return(
      <GetBaseCurrency currency = {currency} rowName = {rowName}/>
    )
}

export default UsdCupCake;