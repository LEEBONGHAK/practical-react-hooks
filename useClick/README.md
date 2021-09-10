# @practical-react-hooks/use-click

React Hook to detect and execute the function when someone click the element.

## Installation

yarn  
```
yarn add @practical-react-hooks/use-click
```
  
npm
```  
npm i @practical-react-hooks/use-click
```

## Usage
  
```
import React from "react";
import useClick from "@practical-react-hooks/use-click";

const App = () => {
  const sayHello = () => console.log("Hello World!");
  const trigger = useClick(sayHello)
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