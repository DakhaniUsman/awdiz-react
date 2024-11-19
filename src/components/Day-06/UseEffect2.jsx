import { useEffect, useState } from "react"

function UseEffect2() {

    const [counter, setCounter] = useState(1);

    function Increment() {
        setCounter(counter + 1);
    }

    useEffect(() => {
        alert("Use Effect is triggered");
        console.log("Use Effect is triggered");
    }, [])
    return (
        <>
            <h1>Use Effect no Dependency</h1>

            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>

            <p>This is use effect with empty dependency : </p>
            <p>It is triggered only at the initial page render</p>
        </>
    )
}

export default UseEffect2;