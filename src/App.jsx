import { useState } from 'react';
import text from './data';
import { nanoid } from 'nanoid';

function App() {
  const [amount, setAmount] = useState(1);
  const [arrayText, setArrayText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = parseInt(amount);
    setArrayText(text.slice(0, newValue));
    return;
  };
  return (
    <main>
      <h1>tired of boring lorem ipsum</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min={1}
          max={8}
          step={1}
        />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
      <div className="results">
        {arrayText.map((item) => (
          <p key={nanoid()}>{item}</p>
        ))}
      </div>
    </main>
  );
}

export default App;
