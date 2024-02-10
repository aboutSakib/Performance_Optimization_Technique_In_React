import { memo } from "react";

const ButtionCounter = ({ submitHandler }) => {
  console.log("button is rendering");
  return <button onClick={submitHandler}>Increase Counter</button>;
};

export default memo(ButtionCounter);
