// ------函式型元件-------- //

// 從node_modules的"react"導入React和useState函式庫
// 有導入React才能用jsx語法
// jsx: react建立虛擬dom的語法
// {}: 部分導入
import React, { useState } from "react";

// 函式型元件，用return來render
// 開發者自訂的元件開頭英文大寫
// props是AppFunction傳入參數，(class型則會自動得到props)
function AppFunction(props) {
  console.log(props);

  // 解構賦值
  // 宣告一個新的 state(狀態) 變數，名稱為 "total"
  // 用useState()給定初始值
  // 呼叫useState勾子，回傳一組getter(獲取值)和setter(設定值)陣列 (setter是個函式)
  // useState是一個函式，它會接收一作為初始值的參數並回傳一個包含兩個值的array，第一個值是state、第二個值是用來對剛那個state做setState的函式。
  const [total, setTotal] = useState(0);
  // {}: jsx語法，給一個js值/表達式/函示/物件
  return (
    // return 值即元件的 render 方法，只能有一個根元素進行render
    // 多個元件需要用<>...</>(React.Fragment)包住
    <>
      <h1>{props.title123}</h1>
      <h1>{total}</h1>
      <button onClick={() => setTotal(total + 1)}>+1</button>
      <button onClick={() => setTotal(total - 1)}>-1</button>
    </>
  );
}
// 輸出元件(函式)
export default AppFunction;
