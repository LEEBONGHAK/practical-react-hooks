import { useEffect } from 'react';

export const useBeforeLeave = (onBeforeLeave) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBeforeLeave();
    }
  };
  useEffect(() => {
    if (typeof onBeforeLeave !== "function") {
      return;
    }
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};