import React from "react";
import Ajax from "../../services/ajax";
import {
  getSortedCurrency,
  getTransformCurrencyPair,
  transformBaseCurrency,
} from "../../services/transform";
import GetBaseCurrency from "../GetBaseCurrency/GetBaseCurrency";
import {
  RubCupcake,
  EurCupcake,
  UsdCupcake,
  RubEur,
  EurUsd,
  RubUsd,
} from "../../constants/RowConst";

class GetApiCurrency extends React.Component {
  ajax = new Ajax();
  state = {
    RUB: null,
    USD: null,
    EUR: null,
    loading: true,
  };
  componentDidMount() {
    this.ajax.reqRender().then((values) => this.update(values));
  }

  componentDidUpdate() {
    this.ajax.reqPoll().then((values) => this.update(values));
  }

  update(values) {
    this.setState({
      RUB: getSortedCurrency(values, "RUB"),
      USD: getSortedCurrency(values, "USD"),
      EUR: getSortedCurrency(values, "EUR"),
      loading: false,
    });
  }

  render() {
    const { RUB, USD, EUR, loading } = this.state;
    if (loading) {
      return <div>...Loading</div>;
    }
    return (
      <div>
        <GetBaseCurrency
          rowName={RubCupcake}
          currency={transformBaseCurrency(RUB)}
        />
        <GetBaseCurrency
          rowName={UsdCupcake}
          currency={transformBaseCurrency(USD)}
        />
        <GetBaseCurrency
          rowName={EurCupcake}
          currency={transformBaseCurrency(EUR)}
        />
        <GetBaseCurrency
          rowName={RubUsd}
          currency={getTransformCurrencyPair(RUB, USD)}
        />
        <GetBaseCurrency
          rowName={RubEur}
          currency={getTransformCurrencyPair(RUB, EUR)}
        />
        <GetBaseCurrency
          rowName={EurUsd}
          currency={getTransformCurrencyPair(EUR, USD)}
        />
      </div>
    );
  }
}

export default GetApiCurrency;
