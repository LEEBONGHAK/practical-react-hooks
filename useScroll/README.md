# @practical-react-hooks/use-scroll

React Hook to get X/Y coordinates of current position of the scroll.

## Installation

yarn  
```
yarn add @practical-react-hooks/use-scroll
```
  
npm
```  
npm i @practical-react-hooks/use-scroll
```

## Usage
  
```
import React from "react";
import useScroll from "@practical-react-hooks/use-scroll";

const App = () => {
  const { x, y } = useScroll();
  return (
    <div className="App">
      <h1>We are in: {x} / {y}</h1>
    </div>
  );
};
```

## Return
  
|Return value|Type|Description|Default value|
|:---:|:---:|:---:|:---:|
|Coords|Object|An object containing the x/y coordinates of the current scroll position|{x:0, y:0}|