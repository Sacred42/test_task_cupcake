import LongRow from "../LongRow/LongRow";
import ShortRow from "../ShortRow/ShortRow";

const Header = () => {
  const secondRow = { value: "First" };
  const thirdRow = { value: "Second" };
  const fourthRow = { value: "Third" };

  return (
    <div className="row_container">
      <LongRow firstRow={"Pair name/market"} />
      <ShortRow value={secondRow} />
      <ShortRow value={thirdRow} />
      <ShortRow value={fourthRow} />
    </div>
  );
};

export default Header;
