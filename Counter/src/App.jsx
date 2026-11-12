import { useState } from "react";
import Header from "./components/header";
import CounterDisplay from "./components/counterDisplay";
import ControlPanel from "./components/controlPanel";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="app-container">
      <Header title="React Counter App" />
      <CounterDisplay count={count}/>
      <ControlPanel onIncrement={increment} onReset={reset} onDecrement={decrement}/>
    </div>
  );
}
export default CounterApp