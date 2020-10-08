import React, { useState } from "react";
//
// 函式型元件，用return來render
function App() {
  // 解構賦值
  // 用useState()給定初始值
  const [total, setTotal] = useState(0);

  // {}: 給一個js值/表達式/函示/物件
  return (
    <>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </>
  );
}

export default App;
