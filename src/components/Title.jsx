import { memo } from "react";

const Title = () => {
  console.log("hello i am title");
  return <div>Our Counter App</div>;
};

export default memo(Title);
