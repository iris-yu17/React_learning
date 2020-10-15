//  ------ 測試引入bs、scss覆蓋 -------  //
// App_09.testScss

// 導入其它的模組
import React, { useState } from "react";
import ClockFunction from "./components/ClockFunction";

// HTML碼轉成JSX語法注意事項(bootstrap)
// 1.單一行的結尾必須要是/>
// 2.class要換成className
// 3.for要換成htmlFor
// 4.style要變成js的物件值(雙花括號)
function App(props) {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

// 輸出元件(函式)
export default App;
