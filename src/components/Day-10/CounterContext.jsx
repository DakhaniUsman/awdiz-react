import { useContext } from "react";
import { MyCounterContext } from "../context/CounterContext";

const CounterContext = () => {
  const { state, dispatch } = useContext(MyCounterContext);

  function Increment() {
    dispatch({ type: "INCREMENT" });
  }
  function Decrement() {
    dispatch({ type: "DECREMENT" });
  }
  function Reset() {
    dispatch({ type: "RESET" });
  }
  return (
    <div>
      <h1>Counter Context</h1>
      <h1>Counter : {state.counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>RESET</button>
    </div>
  );
};

export default CounterContext;
