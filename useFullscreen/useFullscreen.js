export const useFullscreen = (callBack) => {
  const element = useRef();
  const runCb = (isFull) => {   // callBack이 함수인지 확인
    if (typeof callBack === "function") {
      callBack(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {    // when web browser is firfox
        element.current.mozRequestFullScreen();
      } else if (element.current.wekitRequestFullscreen) {    // when web browser is opera
        element.current.wekitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {     // when web browser is microsoft
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {    // when web browser is firfox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {    // when web browser is opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {     // when web browser is microsoft
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};