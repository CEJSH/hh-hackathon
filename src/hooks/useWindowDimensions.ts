import { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        setWindowDimensions({ width, height });
      };

      getWindowDimensions();

      window.addEventListener("resize", getWindowDimensions);

      return () => {
        window.removeEventListener("resize", getWindowDimensions);
      };
    }
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
