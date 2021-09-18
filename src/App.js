import './App.css';
import { Toggle } from './components/PropDrilling';
import { Counter } from './components/Counter_01';
import { Counter2 } from './components/Counter_02';
import { CountPage } from './components/count-page';
import { Calculator } from './components/lifting-state-up';

function App() {
  return (
    <div className='app'>
      The Setup
      <Toggle />
      Simple Counter:
      <Counter />
      Multi-Component Counter:
      <Counter2 />
      Counter Using Context:
      <CountPage />
      Lifting State Up:
      <Calculator />
    </div>
  );
}

export default App;
