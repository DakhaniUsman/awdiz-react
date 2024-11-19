import { useEffect, useState } from "react";

function UseEffect3() {
  const [counter, setCounter] = useState(1);

  const [counter2, setCounter2] = useState(100);

  function Increment() {
    setCounter(counter + 1);
  }

  function Increment2() {
    setCounter2(counter2 + 1);
  }

  useEffect(() => {
    console.log("Use effect triggered");
    alert("Use effect is triggered");
  }, [counter2]); // single dependency the use ffect will only be triggered on initial render and if state mentioned in the depedency changes
  // it tracks the counter2

  return (
    <div>
      <h1>Use Effect with single dependency</h1>

      <h1>Counter 1 : {counter}</h1>
      <button onClick={Increment}>+</button>
      <h1>Counter 2 : {counter2}</h1>
      <button onClick={Increment2}>+</button>

      <h3>The use effect is triggered on : </h3>
      <p>Initial page render</p>
      <p>state change of counter2</p>
    </div>
  );
}

export default UseEffect3;
