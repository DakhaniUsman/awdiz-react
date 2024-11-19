import { useEffect, useState } from "react";

function UseEffect4() {
  const [counter, setCounter] = useState(1);

  const [counter2, setCounter2] = useState(100);

  const [counter3, setCounter3] = useState(1000);

  function Increment() {
    setCounter(counter + 1);
  }

  function Increment2() {
    setCounter2(counter2 + 1);
  }

  function Increment3() {
    setCounter3(counter3 + 1);
  }


  useEffect(() => {
    console.log("Use effect triggered");
    alert("counter2 is clicked");
  }, [counter2]); // multiple dependency the use effect will  be triggered on initial render and if states mentioned in the depedency changes
  // it tracks the counter2, counter3

  useEffect(() => {
    console.log("Use effect triggered");
    alert("counter3 is clicked");
  }, [counter3]);

  return (
    <>
      <h1>Use Effect with multiple dependency</h1>

      <h1>Counter 1 : {counter}</h1>
      <button onClick={Increment}>+</button>
      <h1>Counter 2 : {counter2}</h1>
      <button onClick={Increment2}>+</button>
      <h1>Counter 3 : {counter3}</h1>
      <button onClick={Increment3}>+</button>

      <h3>The use effect is triggered on : </h3>
      <p>Initial page render</p>
      <p>state change of counter2</p>
      <p>state change of counter3</p>
    </>
  );
}

export default UseEffect4;
