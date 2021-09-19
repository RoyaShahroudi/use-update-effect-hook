import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState } from "react";
import useUpdateEffect from '../.';

const App = () => {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);
 
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
