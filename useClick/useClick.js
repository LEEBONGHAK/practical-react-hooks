export const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    // check onClick is function
    if (typeof onClick !== "function") {
      return;
    }
    if (element.current) {
      // for componentDidMount and componentDidUpdate
      element.current.addEventListener("click", onClick);
    }
    return () => {
      // for componentWillUnMount
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return typeof onClick !== "function" ? undefined : element;
};