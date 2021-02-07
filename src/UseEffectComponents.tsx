import { useEffect, useState } from "react";

const UseEffectComponents = () => {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((v) => v + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <div>{val}</div>;
};

export default UseEffectComponents;
