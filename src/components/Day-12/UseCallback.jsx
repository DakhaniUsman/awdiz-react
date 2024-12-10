import { useCallback, useState } from "react";
import ChildrenComponent from "./ChildrenComponent";

function UseCallback() {

    const [counter, setCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(100);

    // on every render it re creates the functions


    // function Increment() {
    //     setCounter(counter + 1);
    // }
    // recreated

    // ES6 Syntaxt
    const Increment = useCallback(() => {
        setCounter(counter + 1)
    }, [counter]);

    const IncrementSecondCounter = () => {
        setSecondCounter(secondCounter + 1);
    }
    // recreated


    return (
        <div>
            <h1>Use Callback Page</h1>
            <h1>Counter : {counter} </h1>
            <button onClick={Increment}>+</button>

            <h1>Second Counter : {secondCounter}</h1>
            <button onClick={IncrementSecondCounter}>+</button>


            <ChildrenComponent increment={Increment} counter={counter} />

        </div>
    )
}

export default UseCallback;