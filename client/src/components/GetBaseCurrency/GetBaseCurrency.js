import React from "react";
import ShortRow from "../ShortRow/ShortRow";
import LongRow from "../LongRow/LongRow";

const GetBaseCurrency = ({ rowName, currency }) => {
  return (
    <div>
      {currency ? (
        <div className="row_container">
          <LongRow firstRow={rowName} />
          <ShortRow value={currency.valueCurrency1} />
          <ShortRow value={currency.valueCurrency2} />
          <ShortRow value={currency.valueCurrency3} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default GetBaseCurrency;
