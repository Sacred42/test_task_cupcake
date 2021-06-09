import GetNumberRow from'../../GetNumberRow/GetNumberRow';

const RubCupcake = (props) => {
    const rowName = 'RUB/CUPCAKE';
    return(
      <GetNumberRow currency={props} rowName = {rowName}/>
    )
}

export default RubCupcake;