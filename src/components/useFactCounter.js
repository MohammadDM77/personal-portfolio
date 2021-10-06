import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useFactCounter = (value, number) => {
  const [element, view] = useInView({ threshold: 1 });
  const [counter, setCounter] = useState(number);

  useEffect(() => {
    const startCounter = setInterval(() => {
      if (counter < value && view) setCounter((prevCounter) => prevCounter + 1);
    }, 0.1);

    return () => {
      clearInterval(startCounter);
    };
  }, [counter, view, value]);

  return { element, counter };
};
