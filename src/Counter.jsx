import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setNumber((prev) => prev + 1);
          setNumber((prev) => prev + 1);
          setNumber((prev) => prev + 1);
          setNumber((prev) => prev + 1);
          setNumber((prev) => prev + 1);
          setNumber((prev) => prev + 1);
          setNumber((prev) => prev + 1);
        }}
      ></button>
    </div>
  );
}
