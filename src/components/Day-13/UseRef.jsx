import React, { useRef } from 'react'



const UseRef = () => {

    const ref = useRef(0); // {current : 0}
    console.log(ref.current,"ref.current initital value ");

    function handleClick () {
        ref.current = ref.current + 1;
        console.log(ref.current,"ref.current")
    }

    console.log("Component is rendered ⚡")

    return (
        <div>
            <h1>Use Ref Page - {ref.current}</h1>
            <button onClick={handleClick}>+</button>

        </div>
    )
}

export default UseRef;

// useRef() is a react hook used to reference a value without making the component render
// const ref = useRef(0);
// here 0 is ref value it is accessed as ref.current
// On its initial render the ref vaue is shown on page
// but when + button is clicked the ref value is incremented but since it prevenets the component from rendering the updated ref value is not shown on the page

// NOTE : Changing the ref does not trigger re render