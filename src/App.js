import React, { useCallback, useMemo, useState } from "react";
import ButtionCounter from "./components/Buttion";
import CounterApp from "./components/CounterApp";
import Title from "./components/Title";

const App = () => {
  console.log("app is rendering");
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(10);

  const increaseCounter = useCallback(() => {
    setCounter((currentState) => currentState + 1);
  }, []);

  const increaseCounter2 = useCallback(() => {
    setCounter2((currentState2) => currentState2 + 10);
  }, []);
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 9999999) {
      i++;
    }
    return counter % 2 === 0 ? "Even" : "ODD";
  }, [counter]);
  return (
    <div className="counterApp">
      <Title />
      <br />
      <div className="counter_app">
        <CounterApp counter={counter} />
        <p>The Counter Value is {isEven}</p>
        <ButtionCounter submitHandler={increaseCounter} />
      </div>
      <br />
      <br />
      <hr />
      <div className="counter_app">
        <CounterApp counter={counter2} />
        <ButtionCounter submitHandler={increaseCounter2} />
      </div>
    </div>
  );
};

export default App;
