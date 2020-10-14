//  ------ 測試引入bs、scss覆蓋 -------  //
// App_09.testScss

// 導入其它的模組
import React, { useState } from "react";
import ClockFunction from "./components/ClockFunction";

function App(props) {
  return (
    <>
      <ClockFunction />
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <div class="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
      <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
    </>
  );
}

// 輸出元件(函式)
export default App;
