export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {  // allTabs이 존재하고, array인지 확인
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};