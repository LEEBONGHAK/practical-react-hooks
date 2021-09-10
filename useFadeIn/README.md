# @practical-react-hooks/use-fade-in

React Hook to fade in any element.

## Installation

yarn  
```
yarn add @practical-react-hooks/use-fade-in
```
  
npm
```  
npm i @practical-react-hooks/use-fade-in
```

## Usage
  
```
import React from "react";
import useFadeIn from "@practical-react-hooks/use-fade-in";

const App = () => {
  const fadeIn = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeIn}>Hello World</h1>
    </div>
  );
};
```

## Arguments
  
|Argument|Type|Description|Required|Default value|
|:---:|:---:|:---:|:---:|:---:|
|duration|number|Sets the duration of the transition. In seconds|no|1|
|delay|number|Delays of transition's start. In seconds|no|0|