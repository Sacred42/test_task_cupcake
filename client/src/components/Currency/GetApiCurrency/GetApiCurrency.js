import React from 'react';
import Ajax from  '../../../services/ajax';
import {getSortedCurrency , getTransformCurrencyPair as currencyPair} from '../../../services/transform';
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

      this.ajax.reqPoll()
      .then((values)=>this.update(values));
    }

    update(values){
        this.setState({
            RUB : getSortedCurrency(values,'RUB'), 
            USD : getSortedCurrency(values, 'USD'),
            EUR : getSortedCurrency(values, 'EUR')
        })
    }
    
    render(){
        const {RUB, USD, EUR} = this.state;
        console.log(RUB , 'RUB')
        return(
          <div>
            <RubCupcake currency={RUB}/>
            <UsdCupcake currency={USD}/>
            <EurCupcake currency={EUR}/>
            <RubUsd currency={currencyPair(RUB, USD)}/>
            <RubEur currency={currencyPair(RUB, EUR)}/>
            <EurUsd currency={currencyPair(EUR, USD)}/>

          </div>
        )
    }
}

export default GetApiCurrency;