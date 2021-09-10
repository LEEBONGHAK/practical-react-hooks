# @practical-react-hooks/use-notification

React Hook to make web browser notification to user

## Installation

yarn  
```
yarn add @practical-react-hooks/use-notification
```
  
npm
```  
npm i @practical-react-hooks/use-notification
```

## Usage
  
```
import React from "react";
import useNotification from "@practical-react-hooks/use-notification";

const App = () => {
  const triggerNotif = useNotification("Can you love me?", {body: "I love you"});
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};
```

## Arguments
  
|Argument|Type|Description|Required|
|:---:|:---:|:---:|:---:|
|title|string|Notification title|yes|
|options|objects|Notification options in notification API (https://developer.mozilla.org/en-US/docs/Web/API/notification)|no|

## Return
  
|Return value|Type|Description|
|:---:|:---:|:---:|
|fireNotif|Function|Function to make Notification|