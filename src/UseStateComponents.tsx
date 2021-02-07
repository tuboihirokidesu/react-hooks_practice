import { useMemo, useState } from "react";

const UseStateComponents = () => {
  const [number, setNumber] = useState<number[]>([]);
  const oddNumbers = useMemo(() => number.filter((n) => n % 2 === 1), [number]);
  return (
    <>
      <div>Odd Number:{JSON.stringify(oddNumbers)}</div>
      <div>
        <button onClick={() => setNumber([...number, number.length + 1])}>
          add to array
        </button>
        {JSON.stringify(number)}
      </div>
    </>
  );
};

export default UseStateComponents;
