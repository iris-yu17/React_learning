// ------美金轉新台應用完成-單元件版本------//
// App_04.currencyConvert_singleComponent

// 導入其它的模組
import React, { useState } from "react";

function App(props) {
  const [twd, setTwd] = useState(0);
  const [usd, setUsd] = useState(0);

  // 注意，這種數字運算會去掉小數然後四捨五入，所以不夠精準，只作範例用
  const usd2Twd = (usd) => (usd * 28.53).toFixed(2);
  // const twd2Usd = (twd) => (twd > 0 ? (twd / 28.53).toFixed(2) : 0);
  const twd2Usd = (twd) => (twd / 28.53).toFixed(2);

  return (
    <>
      新台幣：
      <input
        type="text"
        value={twd}
        onChange={(e) => {
          // 因setXXX 會異步執行，先得到更動後的值
          const newTwd = e.target.value;
          // 再設定兩個需要設定的狀態值
          setTwd(newTwd);
          setUsd(twd2Usd(newTwd));
        }}
      />
      <br />
      美金：
      <input
        type="text"
        value={usd}
        onChange={(event) => {
          // 先得到更動後的值
          const newUsd = event.target.value;
          setUsd(newUsd);
          setTwd(usd2Twd(newUsd));
        }}
      />
    </>
  );
}

// 輸出元件(函式)
export default App;
