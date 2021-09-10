import { useState, useEffect } from 'react';

export const useNetwork = (onChange) => {
  // navigator.onLine : 웹사이트가 online 상태인지 boolean으로 반환
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    // 함수를 이용해 추가적인 기능을 수행하고 싶을 때
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    // componentWillUnMount 일 때 event 제거를 위해
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;  // true, false 반환
};