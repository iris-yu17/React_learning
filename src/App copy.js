// --------傳遞資料到子女元件中--------  //

// 從node_modules的"react"導入React和useState函式庫
// 在node_modules裡面就不需要寫路徑
import React, { useState } from "react";

// 導入元件
import AppFuncion from "./components/AppFunction";
import AppClass from "./components/AppClass";

function App() {
  return (
    <>
      {/* 使用類似HTML標記的方式來放置元件要呈現(渲染)的位置 */}
      {/* 使用類似HTML給定屬性值(html屬性:attribute, React屬性叫props)的方式來傳遞資料到子女元件中 */}
      <AppFuncion title="函式型元件" />
      <AppClass title="類別型元件" />
    </>
  );
}
// 輸出元件(函式)
export default App;
