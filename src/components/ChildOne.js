// 導入其它的模組
import React, { useState } from "react";

function ChildOne(props) {
  return (
    <>
      {/* 呈現由父母元件來的資料 */}
      <h1>{props.text}</h1>
      {props.title}
    </>
  );
}

// 輸出元件(函式)
export default ChildOne;
