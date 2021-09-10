# @practical-react-hooks/use-fade-out

React Hook to fade out any element.

## Installation

yarn  
```
yarn add @practical-react-hooks/use-fade-out
```
  
npm
```  
npm i @practical-react-hooks/use-fade-out
```

## Usage
  
```
import React from "react";
import useFadeOut from "@practical-react-hooks/use-fade-out";

const App = () => {
  const fadeOut = useFadeOut(5, 10);
  return (
    <div className="App">
      <h1 {...fadeOut}>Hello World</h1>
    </div>
  );
};
```

## Arguments
  
|Argument|Type|Description|Required|Default value|
|:---:|:---:|:---:|:---:|:---:|
|duration|number|Sets the duration of the transition. In seconds|no|1|
|delay|number|Delays of transition's start. In seconds|no|0|
  
## Return
  
|Name|Type|Description|
|:---:|:---:|:---:|
|ref|React Ref|A ref created to fadeIn the element|
|style|Object|Style object containing {opacity:1} to give to the element as a default|