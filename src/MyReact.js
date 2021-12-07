import { useState } from "react";

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);
  console.log(state);

  function dispatch(actionObject) {
    const newState = reducer(state, actionObject);
    setState(newState);
  }

  return [state, dispatch];
}
