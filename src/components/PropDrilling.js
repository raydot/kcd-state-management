import React from 'react';

// Original function
// export function Toggle() {
//   const [on, setOn] = React.useState(false);

//   const toggle = () => setOn((o) => !o);
//   return (
//     <div>
//       <div>The button is {on ? 'on' : 'off'}.</div>
//       <button onClick={toggle}>Toggle</button>
//     </div>
//   );
// }

// Function split into two parts:
// export function Toggle() {
//   const [on, setOn] = React.useState(false);
//   // I just relized...this works because of what setOn returns, not what it's set to
//   const toggle = () => setOn((o) => !o);
//   // Need to send some props to get it working, simple enough...
//   return <Switch on={on} onToggle={toggle} />;
// }

// function Switch({ on, onToggle }) {
//   return (
//     <div>
//       <div>The button is {on ? 'on!' : 'off.'}</div>
//       <button onClick={onToggle}>Toggle</button>
//     </div>
//   );
// }

// Now let's split into three parts.  THIS is prop drilling:
export function Toggle() {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn((o) => !o);
  return <Switch on={on} onToggle={toggle} />;
}

/**
 * To get the on state and toggle handler to the right places,
 * we have to drill (or thread) props through the Switch
 * component.  The component itself doesn't actually need those
 * values to function, but we have to accept and forward those
 * props because its children need them.
 */
function Switch({ on, onToggle }) {
  return (
    <div>
      <SwitchMessage on={on} />
      <SwitchButton onToggle={onToggle} />
    </div>
  );
}

function SwitchMessage({ on }) {
  return <div>The button is {on ? 'on!' : 'off.'}</div>;
}

function SwitchButton({ onToggle }) {
  return <button onClick={onToggle}>Toggle</button>;
}
