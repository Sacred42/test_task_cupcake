import React, { useState, useEffect } from "react";
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

const GetApiCurrency = () => {
  const ajax = new Ajax();
  const [RUB, setRUB] = useState(null);
  const [USD, setUSD] = useState(null);
  const [EUR, setEUR] = useState(null);
  const [valuesState, setValuesState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ajax.reqRender().then((values) => update(values));
    return () => {};
  }, []);

  useEffect(() => {
    ajax.reqPoll().then((values) => update(values));
  }, [valuesState]);

  const update = (values) => {
    setValuesState(values);
    setRUB(getSortedCurrency(values, "RUB"));
    setUSD(getSortedCurrency(values, "USD"));
    setEUR(getSortedCurrency(values, "EUR"));
    setLoading(false);
  };

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
};

export default GetApiCurrency;
