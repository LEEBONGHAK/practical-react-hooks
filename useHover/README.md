# @practical-react-hooks/use-hover

React Hook to detect and execute the function when mouse hover the element.

## Installation

yarn  
```
yarn add @practical-react-hooks/use-hover
```
  
npm
```  
npm i @practical-react-hooks/use-hover
```

## Usage
  
```
import React from "react";
import useHover from "@practical-react-hooks/use-hover";

const App = () => {
  const sayHello = () => console.log("Hello World!");
  const trigger = useHover(sayHello)
  return (
    <div className="App">
      <h1 ref={trigger}>Hello</h1>
    </div>
  );
};
```

## Arguments  
  
|Argument|Type|Description|Required|
|:---:|:---:|:---:|:---:|
|onClick|function|The function to execute when click element|yes|
