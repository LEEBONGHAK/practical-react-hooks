# @practical-react-hooks/use-input

React Hook to update your document's input.

## Installation

yarn  
```
yarn add @practical-react-hooks/use-input
```
  
npm
```  
npm i @practical-react-hooks/use-input
```

## Usage
  
```
import React from "react";
import useInput from "@practical-react-hooks/use-input";

const App = () => {
  const validator = value => value.length < 30;
  const name = useInput("Mr./Ms.", validator);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
```

## Arguments  
  
|Argument|Type|Description|Required|
|:---:|:---:|:---:|:---:|
|initialValue|string|initial Value you want to use on input|no|
|validator|function|The function you want to valid input value and The function that return boolean|no|