# @practical-react-hooks/use-before-leave

React Hook to execute a function when the mouse leaves the page. Useful to show a popup or for analytics.

## Installation

yarn  
```
yarn add @practical-react-hooks/use-before-leave
```
  
npm
```  
npm i @practical-react-hooks/use-before-leave
```

## Usage
  
```
import React from "react";
import useBeforeLeave from "@practical-react-hooks/use-before-leave";

const App = () => {
  const beforeLeave = () => console.log("User is leaving...");
  useBeforeLeave(beforeLeave);
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
};
```

## Arguments
  
|Argument|Type|Description|Required|
|:---:|:---:|:---:|:---:|
|onBeforeLeave|function|Function to be called when the mouse leaves the document|yes|  