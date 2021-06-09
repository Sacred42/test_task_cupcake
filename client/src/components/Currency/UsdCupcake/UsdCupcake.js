import GetNumberRow from'../../GetNumberRow/GetNumberRow';

const UsdCupCake = (props) => {
    const rowName = 'USD/CUPCAKE';
    return(
      <GetNumberRow currency = {props} rowName = {rowName}/>
    )
}

export default UsdCupCake;