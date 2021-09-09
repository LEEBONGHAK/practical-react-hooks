export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const onScroll = () => {
    // window.screenY, window.screenX : window의 scroll 위치를 측정
    setState({ x: window.screenX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);
  return state;
};