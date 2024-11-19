import { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(1);

  function Increment() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    console.log("use effect is triggered");
    alert("Use effect is triggered");
  }, []); // empty dependency

  return (
    <div>
      <h1>Use Effect</h1>

      <h1>Counter : {counter}</h1>

      <button onClick={Increment}>+</button>

      <h3>The use effect is triggered on : </h3>
      <p>Initial page render</p>
      <p>any state change</p>
    </div>
  );
}

export default UseEffect;
