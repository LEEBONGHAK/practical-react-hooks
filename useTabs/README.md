# @practical-react-hooks/use-tabs

React Hook to use content easily in array of objects inside.

## Installation

yarn  
```
yarn add @nooks/use-tabs  
```
  
npm
```  
npm i @nooks/use-tabs
```

## Usage
  
```
import React from "react";
import useTabs from "@nooks/use-tabs";

const content = [
  {
    tab: "Section 1",
    content: "This is the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "This is the content of the Section 2"
  },
  ...
];

function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (<button onClick={() => changeItem(index)}>{section.tab}</button>))}
      <h1>{currentItem.content}</h1>
    </div>
  );
}
```

## Arguments  
  
|Argument|Type|Description|Required|
|:---:|:---:|:---:|:---:|
|initialTab|number|The index you want to start in array|yes|
|allTabs|array|The array you want to use on your document|yes|