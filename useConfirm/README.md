# @practical-react-hooks/use-confirm

React Hook to ask the user for a confirmation before executing a function.

## Installation

yarn  
```
yarn add @practical-react-hooks/use-confirm
```
  
npm
```  
npm i @practical-react-hooks/use-confirm
```

## Usage
  
```
import React from "react";
import useConfirm from "@practical-react-hooks/use-confirm";

const App = () => {
  const deleteWorld = () => console.log("Deleting world...");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
```

## Arguments  
  
|Argument|Type|Description|Required|
|:---:|:---:|:---:|:---:|
|message|string|Message to show the user on the confirmationpropmt|yes|
|onConfirm|function|Function to be executed when the user confirms|yes|
|onCancel|function|Function to be executed when the user cancels|no|

## Return
  
|Return value|Type|Description|Default value|
|:---:|:---:|:---:|:---:|
|function|function|Function wrapped around the confirmation logic|null|