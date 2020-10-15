//  ------ 生命週期 ------ //
// App_07.lifeCycle

// 導入其它的模組
import React, { useState } from "react";
import LifeCycleFunction from "./components/LifeCycleFunction";
import LifeCycleClass from "./components/LifeCycleClass";

function App(props) {
  return (
    <>
      <LifeCycleClass />
      {/* <LifeCycleFunction /> */}
    </>
  );
}

// 輸出元件(函式)
export default App;
