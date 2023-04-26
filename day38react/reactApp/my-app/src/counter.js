import React, { useState } from "react";
import "./counter.css";
function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
      }
    
      function decrement() {
        setCount(count - 1);
      }
    
      return (
        <div class="background">
            <h1>Counter App</h1>
          <p>Count: {count}</p>
          <button class='btn' onClick={increment}>+</button>
          <button class='btn' onClick={decrement}>-</button>
        </div>
      );
    }
    

export default Counter;