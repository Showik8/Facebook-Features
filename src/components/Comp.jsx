import { useState, useEffect } from "react";


export default function SimpleCounter() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false); 

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  return (
    <div
      style={{ textAlign: "center", fontFamily: "sans-serif", marginTop: 80 }}
    >
      <h1 style={{ fontSize: 64 }}>{count}</h1>

      {/* ღილაკი: ჩართვა / გაჩერება */}
      <button onClick={() => setRunning(!running)} style={btn}>
        {running ? "⏸ გაჩერება" : "▶ დაწყება"}
      </button>

      {/* ღილაკი: ნულზე დაბრუნება */}
      <button
        onClick={() => {
          setCount(0);
          setRunning(false);
        }}
        style={btn}
      >
        ↺ თავიდან
      </button>
    </div>
  );
}

const btn = {
  fontSize: 18,
  padding: "10px 20px",
  margin: 8,
  borderRadius: 8,
  border: "1px solid #ccc",
  cursor: "pointer",
};
