import GetNumberRow from'../../GetNumberRow/GetNumberRow';

const EurCupCake = (props) => {
    const rowName = 'EUR/CUPCAKE'
    return(
      <GetNumberRow currency={props} rowName={rowName}/>
    )
}

export default EurCupCake;