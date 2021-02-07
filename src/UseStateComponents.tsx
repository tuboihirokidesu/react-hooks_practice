import { useState } from "react";

const UseStateComponents = () => {
  const [number, setNumber] = useState<number[]>([]);
  return (
    <div>
      <button onClick={() => setNumber([...number, number.length + 1])}>
        add to array
      </button>
      {JSON.stringify(number)}
    </div>
  );
};

export default UseStateComponents;
