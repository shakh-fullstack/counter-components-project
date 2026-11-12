function ControlPanel({ onIncrement, onReset, onDecrement }) {
  return (
    <div className="control-buttons">
      <button onClick={onIncrement}>➕</button>
      <button onClick={onReset}>🔄️</button>
      <button onClick={onDecrement}>➖</button>
    </div>
  );
}
export default ControlPanel;