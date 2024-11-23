import { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(1);

  const [loggedIn, setloggedIn] = useState(false);

  const buttonStyleRed = {
    backgroundColor: "red",
  };

  const buttonStyleGreen = {
    backgroundColor: "green",
  };

  function Increment() {
    setCounter(counter + 1);
  }

  function LoggedIn() {
    setloggedIn(!loggedIn);
  }

  useEffect(() => {
    console.log("use effect is triggered");
    alert("Use effect is triggered");
    console.log(loggedIn);
  }); // empty dependency

  return (
    <div>
      <h1>Use Effect</h1>

      <h1>Counter : {counter}</h1>

      <button onClick={Increment}>+</button>

      <h3>The use effect is triggered on : </h3>
      <p>Initial page render</p>
      <p>any state change</p>

      {loggedIn ? (
        <div>
          <h1>Welcome User</h1>
          <button style={buttonStyleGreen} onClick={LoggedIn}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h1>Please Log In</h1>
          <button style={buttonStyleRed} onClick={LoggedIn}>
            Log In
          </button>
        </div>
      )}
    </div>
  );
}

export default UseEffect;
