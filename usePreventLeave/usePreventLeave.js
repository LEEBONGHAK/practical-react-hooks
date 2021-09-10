import React from 'react';

export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  // for protect
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  // not for protect
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};