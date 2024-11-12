import { useState } from "react";
import "./UseState.css";

function UseState() {
  const [counter, setCounter] = useState(0);

  function Increment() {
    setCounter(counter + 1);
  }

  function Reset() {
    setCounter(0);
  }

  function Decrement() {
    setCounter(counter - 1);
  }
  return (
    <div>
      <h1>Counter Component</h1>
      <h1>Counter : {counter} </h1> {/* here we are using js var in html jsx*/}
      <button onClick={Increment}>+</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
}

export default UseState;
