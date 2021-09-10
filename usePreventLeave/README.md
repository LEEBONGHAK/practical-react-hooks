# @practical-react-hooks/use-prevent-leave

React Hook to prompt the user for confirmation before leaving the page. Useful when changes haven't been saved.

## Installation

yarn  
```
yarn add @practical-react-hooks/use-prevent-leave
```
  
npm
```  
npm i @practical-react-hooks/use-prevent-leave
```

## Usage
  
```
import React from "react";
import usePreventLeave from "@practical-react-hooks/use-prevent-leave";

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const saveChanges = async () => {
    enablePrevent();
    await sendToApi();
    disablePrevent();
  };
  return (
    <div className="App">
      <button onClick={saveChanges}>Save changes</button>
    </div>
  );
};
```

## Return
  
|Return value|Type|Description|
|:---:|:---:|:---:|
|Functions|Object|A object containing functions enablePrevent and disablePrevent, use this functions to enable/disable the leaving prevention|