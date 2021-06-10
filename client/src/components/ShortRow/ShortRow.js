import React from "react";
import "./ShortRow.css";

const ShortRow = (props) => {
  const classMark = "mark_row";
  const { value, smaller } = props.value;
  return (
    <div className={`short_row_size  ${smaller ? classMark : ""}`}>{value}</div>
  );
};

export default ShortRow;
