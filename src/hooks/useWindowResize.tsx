import { useEffect, useState } from "react";

const currentWindowSize = (): number => {
  return window.innerWidth;
};
const useWindowResize = () => {
  const [width, setWidth] = useState(currentWindowSize());
  const hanldeWindowSize = () => {
    setWidth(currentWindowSize());
  };
  useEffect(() => {
    window.addEventListener("resize", hanldeWindowSize);
    return () => {
      window.removeEventListener("resize", hanldeWindowSize);
    };
  }, []);
  return width;
};
export default useWindowResize;
