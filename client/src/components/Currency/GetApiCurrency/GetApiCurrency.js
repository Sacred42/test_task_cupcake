import React from 'react';
import Ajax from  '../../../services/ajax';
import {getCurrency} from '../../../services/transform';
import EurUsd from '../EurUsd/EurUsd';
import EurCupcake from '../EurCupcake/EurCupcake';
import RubCupcake from '../RubCupcake/RubCupcake';
import RubEur from '../RubEur/RubEur';
import RubUsd from '../RubUsd/RubUsd';
import UsdCupcake from '../UsdCupcake/UsdCupcake';

class GetApiCurrency extends React.Component {
    ajax = new Ajax();
    state = {
        RUB : null,
        USD : null,
        EUR : null
    }
    componentDidMount(){
      this.ajax.ReqRender()
      .then((values)=>this.update(values))
    }

    update(values){
        this.setState({
            RUB : getCurrency(values,'RUB'), 
            USD : getCurrency(values, 'USD'),
            EUR : getCurrency(values, 'EUR')
        })
    }
    
    render(){
        return(
          <div>
            <RubCupcake/>
            <UsdCupcake/>
            <EurCupcake/>
            {/* <RubUsd/>
            <RubEur/>
            <RubUsd/> */}
          </div>
        )
    }
}

export default GetApiCurrency;