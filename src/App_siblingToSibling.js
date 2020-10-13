// --------子女元件之間互傳資料-------- siblingToSibling //
//  steps:
//  1.parent send setXXX to child2
//  2.child2 send data to parent via setXXX
//  3.parent send data to child1

// 導入其它的模組
import React, { useState } from "react";

import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";

function App(props) {
  const [text, setText] = useState("");

  return (
    <>
      <h1>ChildOne</h1>
      {/* 父母元件利用props傳給子女，呈現文字資料 */}
      <ChildOne title="我要接資料(One)" text={text} />
      <hr />
      <h1>ChildTwo</h1>
      {/* 父母元件利用props傳給子女，準備要接收資料的函式setText */}
      <ChildTwo title="我要傳資料(Two)" setText={setText} />
    </>
  );
}

// 輸出元件(函式)
export default App;
