// 從node_modules的"react"導入模組React和useState
// {}: 部分導入
import React, { useState } from "react";

// 函式型元件，用return來render
// 開發者自訂的元件開頭英文大寫
function App() {
  // 解構賦值
  // 用useState()給定初始值
  // 呼叫useState勾子，回傳一組getter(獲取值)和setter(設定值)陣列
  const [total, setTotal] = useState(0);
  // {}: 給一個js值/表達式/函示/物件
  return (
    // return 值即元件的 render 方法，只能有一個根元素進行render
    // 多個元件需要用<>...</>(React.Fragment)包住
    <>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </>
  );
}
// 輸出元件(函式)
export default App;
