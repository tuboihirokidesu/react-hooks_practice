import { useReducer } from "react";

const initialState = {
  counter: 100,
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

const counterReducer = (
  state: typeof initialState,
  action: ACTIONTYPES
): { counter: number } => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    default:
      throw new Error("Bad action");
  }
};

const UseReducerComponents = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      {state.counter}
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerComponents;
