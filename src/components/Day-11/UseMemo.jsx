import { useMemo, useState } from "react";

function UseMemo() {

    const [counter, setCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(10);
    const totalHeavyCalculation = useMemo(() =>  HeavyCalculation(counter) , [counter]);
    // const totalHeavyCalculation = HeavyCalculation(counter) ;
    //  this function was executing on each render means on every state change

    // useEffect(()=>{},[])

    function Increment() {
        setCounter(counter + 1);
    }

    function IncrementSecondCounter() {
        setSecondCounter(secondCounter + 1);
    }


    return (

        <div>
            <h1>Use Memo Page</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>
            <h1>Counter : {secondCounter}</h1>
            <button onClick={IncrementSecondCounter}>+</button>
            <h1>Total Heavy Calculation</h1>
            <h1>{totalHeavyCalculation}</h1>
        </div>
    )

    function HeavyCalculation(number) {
        for (let i = 0; i < 100000000; i++) {
            number += i;
        }

        return number;
    }
}

export default UseMemo;

// har state change pe function baar baar execute ho rha hai so to stop it we will cache teh result of heavy calculation and compare it between re rendering it is same as the previous vlaue the function wont execute again and reduce delay therby increasing performance

// useMemo() hook is used to cache the result between re rendering
// now we have cached the heavyCalculation funtion with single dependency as counter
// so this function will only execute on first render and when counter is changed
// it is not rendered on changing the second counter