// 導入其它的模組
import React, { useState, useEffect } from "react";

function LifeCycleFunction(props) {

  // componentDidMount
  useEffect(() => {
    console.log("component did mount");
    return () => {
      // componentWillUnmount是useEffect的回傳值
      console.log("component will unmount");
    };
  }, []);

  return (
    <>
      {(function () {
        console.log("render");
      })()}
    </>
  );
}

// 輸出元件(函式)
export default LifeCycleFunction;
