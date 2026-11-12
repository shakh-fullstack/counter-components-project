function CounterDisplay({ count }) {
  return (
    <div className="counter-display">
      <h2>Current value:</h2>
      <span
        className={count > 0 ? "positive" : count < 0 ? " negative" : "neutral"}
      >
        {count}
      </span>
    </div>
  );
}
export default CounterDisplay;
