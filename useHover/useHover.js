export const useHover = (onHover) => {
  const element = useRef();
  useEffect(() => {
    // check onHover is function
    if (typeof onHover !== "function") {
      return;
    }
    if (element.current) {
      // for componentDidMount and componentDidUpdate
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      // for componentWillUnMount
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return typeof onHover !== "function" ? undefined : element;
};