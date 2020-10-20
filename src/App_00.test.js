// using useState vs just variables
// https://stackoverflow.com/questions/58252454/react-hooks-using-usestate-vs-just-variables
// App_00.test.js

import React, { useState } from "react";

function App() {
  const [a, setA] = useState(0);
  let b = 0;
  return (
    <>
      <div
        onClick={() => {
          setA(a + 1);
          console.log(a);
        }}
      >
        {a}
      </div>
      <div
        onClick={() => {
          b++;
          console.log(b);
        }}
      >
        {b}
      </div>
    </>
  );
}

export default App;
