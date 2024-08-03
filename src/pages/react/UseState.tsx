import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(3);

  const btnClass = "text-red-500 block";

  return (
    <div className="bg-gray-200 min-h-screen w-full flex items-center justify-center">
      <div className="bg-white w-[300px] h-[300px] p-3">
        <h2>useState</h2>
        {count}
        <button onClick={() => setCount((prev) => prev + 1)} className={`${btnClass}`}>
          Plus
        </button>
        <button onClick={() => setCount((prev) => prev - 1)} className={`${btnClass}`}>
          Minus
        </button>
        Change Amount:{" "}
        <input
          title="input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border rounded p-1 w-16 block"
        />
        <button onClick={() => setCount((prev) => prev + amount)}>Plus By Amount {amount}</button>
      </div>
    </div>
  );
}
