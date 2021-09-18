# kcd-state-management

Following Kent C. Dodd's excellent tutorials on state management in React.

## Tutorial #1: [Prop Drilling](https://kentcdodds.com/blog/prop-drilling)

Where it all begins. Code with some comments can be found in `propDrilling.js`.

## Tutorial #2: [Application State Management with React](https://kentcdodds.com/blog/application-state-management-with-react)

Multiple examples how to manage state in React without (necessarily) reaching for Redux. Plents of examples of counters done with prop-drilling, created as multiple components, and handled with `context`. (Along the way he suggests having a look at [Michael Jackson's video](https://www.youtube.com/watch?v=3XaXKiXtNjw) which further talks about doing all of the above <em>without</em> using `context` and using `<children>` instead). He also reminds us that all of this has been explained before, if only you'd read [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) in the React docs the first 99 times you came acrosss it.

The last third of this tutorial leans pretty heavily on an exploration of `context`, including ways in which logic can be encapsulated into hooks, and how this encapsulation could further be augmented with `useReducer`. He also gets into some jumbo state managment use cases, including managing cache with [react-query](https://github.com/tannerlinsley/react-query), and maybe even looking to [Jotai](https://github.com/pmndrs/jotai) if you have a really heavy lift

The essential thrust of this article is, simply, to lean more heavily on the existing ways to manage state in React. Don't go reaching for global state, don't use Redux to handle UI components, and look to the existing app tree for what the shape of your state could potentially be. Keep your state component seperate, use your common sense, and above all else, RTFM!

## Tutorial #03: [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)

## It's been in the React docs from the very beginning. Important to understand if you hope to understand anything about state in React.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
