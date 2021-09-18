import React from 'react';

// So what if we do this?  Where does `count` come from then?
export function Counter({ count, onIncrementClick }) {
  return <button onClick={onIncrementClick}>{count}</button>;
}

function CountDisplay({ count }) {
  // where does `count` come from?
  return <div>The current counter count is {count}</div>;
}

// Here's the answer, right there in the React docs on Lifting State Up!
// https://reactjs.org/docs/lifting-state-up.html
export function Counter2() {
  // This part:
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <CountDisplay count={count} />
      <Counter count={count} onIncrementClick={increment} />
    </div>
  );
}
