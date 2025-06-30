import { useState } from "react";

export const CounterApp = () => {
  const [ state, setCounter] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  });

  const { counter1, counter2, counter3 } = state;

  return (
      <>
        <h1>Counter App</h1>
        <hr />
        <p>Counter 1: {counter1}</p>
        <p>Counter 2: {counter2}</p>
        <p>Counter 3: {counter3}</p>

        <div className="d-flex justify-center gap-2">
          <button className="btn btn-secondary" onClick={()=> setCounter({
            ...state,
            counter1: counter1 - 1,
          })}>-1</button>
          <button className="btn btn-primary" onClick={()=> setCounter({
            ...state,
            counter1: counter1 + 1,
          })}>+1</button>    
        </div>
      </>
  );
}
