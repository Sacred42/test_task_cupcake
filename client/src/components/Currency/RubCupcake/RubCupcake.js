import GetBaseCurrency from'../../GetBaseCurrency/GetBaseCurrency';

const RubCupcake = (props) => {
    const rowName = 'RUB/CUPCAKE';
    return(
      <GetBaseCurrency currency={props} rowName = {rowName}/>
    )
}

export default RubCupcake;