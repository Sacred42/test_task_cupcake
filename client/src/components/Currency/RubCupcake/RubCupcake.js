import GetBaseCurrency from'../../GetBaseCurrency/GetBaseCurrency';

const RubCupcake = ({currency}) => {
    const rowName = 'RUB/CUPCAKE';
    return(
      <GetBaseCurrency currency={currency} rowName = {rowName}/>
    )
}

export default RubCupcake;