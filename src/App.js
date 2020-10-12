// 從node_modules的"react"導入React和useState函式庫
// 在node_modules裡面就不需要寫路徑
import React, { useState } from "react";

// 導入元件
import AppFuncion from "./components/AppFunction";
import AppClass from "./components/AppClass";

function App() {
  return (
    <>
      <AppFuncion />
      <AppClass />
    </>
  );
}
// 輸出元件(函式)
export default App;
