import { useReducer } from "react";

function UseReducer() {

    function Reducer(state, action) {
        // state={coutner : 0}, action = { type : "INCREMENT"}
        console.log(state, action, "state", "action");

        // This is our custom logic

        switch (action.type) {
            case "INCREMENT":
                return { counter: state.counter + 1 }
            case "DECREMENT":
                return { counter: state.counter - 1 }
            case "RESET":
                return { counter: 0 }
            default:
                return state;

        }


    }


    const InitialState = { counter: 0 };

    const [state, dispatch] = useReducer(Reducer, InitialState);
    console.log(state, "state")

    function Increment() {
        dispatch({ type: "INCREMENT" })
        // action = {type : "INCREMENT"}
    }

    function Decrement() {
        dispatch({ type: "DECREMENT" })
        // action = {type : "DECREMENT"}
    }

    function Reset() {
        dispatch({ type: "RESET" })
        // action = {type : "RESET"}
    }

    return (
        <div>
            <h1>Use Reducer Page</h1>

            <h1>Counter : {state.counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>

        </div>
    )
}

export default UseReducer;



// reducer use state jaise hota hai similar
// used to write custom state logic
// jaha multiple states ke saath deal krna hai waha useReducer might be helpful

// useReducer react se import hota hai
// useReducer ko do parameters lagte hai
// useReducer(Reducer, Initialstate)
// Reducer is a function    => function Reducer(){}
// Initialstate is a object => const Initialstate = { counter : 0}

// useReducer 2 cheeze deta hai state dispatch
// const [state,dispatch] = useReducer (Reducer,Initialstate)

// state is used to access Initialstate
// dispatch is used to call Reducer function

// Reducer function ko bhi do parameters lagte hai state action dono bhi obj hai
// function Reducer (state,action)

// state usko bydefault Initialstate se miljata hai

// action me hum { type : "INCREMENT"} aise value pass krte hai wo =>

// dispact me dispatch({ type : "INCREMENT"}) aise bhejna hota hai
// dispact method se Reducer function call hota hai
// reducer function then stores this value in action
// remember the state value is already set by Initialstate
