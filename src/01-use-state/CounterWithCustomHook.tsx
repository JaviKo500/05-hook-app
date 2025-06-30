import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const initialValue = 5;
  const { counter, decrement, increment, reset } = useCounter(initialValue);
  return (
    <>
      <h1>Counter with Custom Hook</h1>
      <hr />
      <p>Counter: {counter}</p>
      <div className="d-flex justify-center gap-2">
        <button className="btn btn-secondary" onClick={() =>  decrement(5) }>-1</button>
        <button className="btn btn-warning" onClick={() => reset()}>Reset</button>
        <button className="btn btn-primary" onClick={ () => increment(5) }>+1</button>
      </div>
    </>
  );
}