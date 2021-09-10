import { useState, useEffect } from 'react';
import defaultAxios from 'axios';

export const useAxios = (options, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({ ...state, loading: true });
    // 랜덤 숫자로 바꿔서 trigger를 바꿔 useEffect를 다시 실행시켜 refetch 시키기 위해
    setTrigger(Date.now()); 
  };
  useEffect(() => {
    if (!options.url) {
      return;
    }
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  // refetch : for reloading
  return { ...state, refetch };
};