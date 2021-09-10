import { useEffect, useRef } from 'react';

export const useHover = (onHover) => {
  const element = useRef();
  useEffect(() => {
    // check onHover is function
    if (typeof onHover !== "function") {
      return;
    }
    // for componentDidMount and componentDidUpdate
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    // for componentWillUnMount
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return typeof onHover !== "function" ? undefined : element;
};