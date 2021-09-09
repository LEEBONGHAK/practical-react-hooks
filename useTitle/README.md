# @practical-react-hooks/use-title

React Hook to update your document's title.

## Installation

yarn  
```
yarn add @practical-react-hooks/use-title  
```
  
npm
```  
npm i @practical-react-hooks/use-title  
```

## Usage
  
```
import React from "react";
import useTitle from "@practical-react-hooks/use-title";

function App() {
  useTitle("Welcome");
  return <h1>Welcome</h1>;
}
```

## Arguments  
  
|Argument|Type|Description|Required|
|:---:|:---:|:---:|:---:|
|title|string|The title you want to use on your document|yes|