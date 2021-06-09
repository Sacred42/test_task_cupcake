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
      this.ajax.reqRender()
      .then((values)=>this.update(values))
    }

    componentDidUpdate(){
      console.log('update')
      console.log(this.state)
      this.ajax.reqPoll()
      .then((values)=>this.update(values));
    }

    update(values){
        this.setState({
            RUB : getCurrency(values,'RUB'), 
            USD : getCurrency(values, 'USD'),
            EUR : getCurrency(values, 'EUR')
        })
    }
    
    render(){
        const {RUB, USD, EUR} = this.state;
        return(
          <div>
            <RubCupcake currency={RUB}/>
            <UsdCupcake currency={USD}/>
            <EurCupcake currency={EUR}/>
            {/* <RubUsd/>
            <RubEur/>
            <RubUsd/> */}

          </div>
        )
    }
}

export default GetApiCurrency;