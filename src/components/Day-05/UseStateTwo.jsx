import { useState } from "react";

function UseStateTwo() {
  const [loggedin, setloggedin] = useState(true);
  // on any state change page is re rendered

  console.log(loggedin, "loggedin");

  function loggedinFalse() {
    setloggedin(false);
  }

  function loggedinTrue() {
    setloggedin(true);
  }

  function Toggleloggedin() {
    setloggedin(!loggedin);   // set the value opposite to original value
  }
  return (
    <div>
      <h1>Use State Two</h1>
      <h1>Check if user is logged in !</h1>

      {loggedin ? (
        <div>
          <h1>Welcome User!</h1>
          <button onClick={Toggleloggedin}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Log In</h1>
          <button onClick={Toggleloggedin}>LogIn</button>
        </div>
      )}
    </div>
  );
}

export default UseStateTwo;

// ternary operator

// condition ? statement 1 : statement 2;

// condition statement

// if (condition){
//     statement 1 ;
// }
// else {
//     statement 2;
// }
