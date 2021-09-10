# @practical-react-hooks/use-axios

React Hook to make HTTP requests with allowing to set configurations and customizations

## Installation

yarn  
```
yarn add @practical-react-hooks/use-axios
```
  
npm
```  
npm i @practical-react-hooks/use-axios
```

## Usage
  
```
import React from "react";
import useAxios from "@practical-react-hooks/use-axios";

const App = () => {
  return (
    const { loading, error, data, refetch } = useAxios({
      url: "API url"
    })
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
```

## Arguments
  
|Argument|Type|Description|Required|
|:---:|:---:|:---:|:---:|
|options|objects|Object to make HTTP requests|yes|
|axiosInstance|objects|To set configurations and customizations of axios|no|

## Return
  
|Return value|Type|Description|
|:---:|:---:|:---:|
|loading|boolean|When loading is finished return flase or not true|
|error|string|Let know error message|
|data|objects|Object from API request|
|refetch|Function|Function to make reloading|