import { useState } from "react";
import "./UseState.css";
import { useNavigate } from "react-router-dom";

function UseState() {
  const [counter, setCounter] = useState(0);

  const router = useNavigate();

  function Increment() {
    setCounter(counter + 1);
  }

  function Reset() {
    setCounter(0);
  }

  function Decrement() {
    setCounter(counter - 1);
  }

  function DynamicPage (){
    router(`/dynamic-routing/${counter}`); // we can use variable template litterals to send placeholders like ${counter} which on submissions send its value
  }


  return (
    <div>
      <h1>Counter Component</h1>
      <h1>Counter : {counter} </h1> {/* here we are using js var in html jsx*/}
      <button onClick={Increment}>+</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrement}>-</button>
      <button onClick={DynamicPage}>Dynamic Page</button>

      
    </div>
  );
}

export default UseState;
