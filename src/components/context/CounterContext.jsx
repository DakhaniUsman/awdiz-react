import { createContext, useReducer } from "react";

export const MyCounterContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 0 };
  }
}

const InitialState = { counter: 0 };

// Higher Order Component (HOC)
// HOC -> it accepts another component as props
const ParentCounterContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);

  return (
    <MyCounterContext.Provider value={{ state, dispatch }}>
      {children}
    </MyCounterContext.Provider>
  );
};

export default ParentCounterContext;
