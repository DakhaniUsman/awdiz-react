import { useState } from "react";

function UseEffect() {

    const [counter, setCounter] = useState(1);

    function Increment() {

        setCounter(counter + 1);
    }

    return (

        <div>
            <h1>Use Effect</h1>

            <h1>Counter : {counter}</h1>

            <button onClick={Increment}>+</button>
        </div>
    )

}

export default UseEffect;