import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  console.log(windowSize);
  
  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};

export default useWindowSize;