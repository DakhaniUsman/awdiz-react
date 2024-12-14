import React, { useRef, useState } from 'react'

const Stopwatch = () => {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    // console.log(Date.now());

    function handleStart() {
        setStartTime(Date.now());
        setNow(Date.now());


        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 1) // call this function in every 1 ms
    }

    function handleStop() {
        clearInterval(intervalRef.current)
    }



    let secondsPassed = 0;
    if (startTime != 0 && now != 0){
        secondsPassed = (now - startTime)/ 1000;
    }


    return (
        <div>
            <h1>Time Passed : {secondsPassed.toFixed(3)}</h1>
            
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

        </div>
    )
}

export default Stopwatch;

// Date.now() sets