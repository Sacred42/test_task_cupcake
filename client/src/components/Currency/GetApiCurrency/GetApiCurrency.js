import React from 'react';
import Ajax from  '../../../services/ajax';
import {getSortedCurrency , getTransformCurrencyPair , transformBaseCurrency} from '../../../services/transform';
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
        EUR : null,
        loading : true
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
            EUR : getSortedCurrency(values, 'EUR'),
            loading : false
        })
    }
    
    render(){
        const {RUB, USD, EUR, loading} = this.state;
        console.log(RUB , 'RUB')
        if(loading){
          return(
            <div>...Loading</div>
          )
        }
        return(
          <div>
            <RubCupcake currency={transformBaseCurrency(RUB)}/>
            <UsdCupcake currency={transformBaseCurrency(USD)}/>
            <EurCupcake currency={transformBaseCurrency(EUR)}/>
            <RubUsd currency={getTransformCurrencyPair(RUB, USD)}/>
            <RubEur currency={getTransformCurrencyPair(RUB, EUR)}/>
            <EurUsd currency={getTransformCurrencyPair(EUR, USD)}/>

          </div>
        )
    }
}

export default GetApiCurrency;