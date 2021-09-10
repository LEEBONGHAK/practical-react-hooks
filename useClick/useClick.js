import { useEffect, useRef } from 'react';

export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    // check onClick is function
    if (typeof onClick !== "function") {
      return;
    }
    // for componentDidMount and componentDidUpdate
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // for componentWillUnMount
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return typeof onClick !== "function" ? undefined : element;
};