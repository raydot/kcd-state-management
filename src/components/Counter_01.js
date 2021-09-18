import React from 'react';

/**
 * Great line right in the opener:
 * "The 'secret' behind my personal solution to the state
 * management problem is to think of how your application's
 * state maps to the application's tree structure."
 */

export function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <button onClick={increment}>{count}</button>
    </div>
  );
}

// All of this works with class components as well
class CounterClass extends React.Component {
  state = { count: 0 };
  increment = () => this.setState(({ count }) => ({ count: count + 1 }));
  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}
