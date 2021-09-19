
# useUpdateEffect()
 

An useEffect that does not run on the first render

## Install

    npm install use-update-effect-hook
or

    yarn add use-update-effect-hook
 
 ## Quickstart
 
 ```jsx
import { useState } from "react";
import useUpdateEffect from "use-update-effect-hook";

function App() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
```
## Demo

https://use-update-effect.vercel.app/