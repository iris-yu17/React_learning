// ------美金轉新台應用完成-單元件版本------ App_currencyConvert_singleComponent//

// 導入其它的模組
import React, { useState } from "react";

function App(props) {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  // 注意，這種數字運算會去掉小數然後四捨五入，所以不夠精準，只作範例用
  //   const usd2Twd = (usd) => (usd * 28.53).toFixed(2);

  return (
    <>
      height：
      <input
        type="text"
        value={height}
        onChange={(e) => {
          // 因setXXX 會異步執行，先得到更動後的值
          const newHeight = e.target.value;

          // 再設定兩個需要設定的狀態值
          setHeight(newHeight);
          //   setweight(twd2Usd(newHeight));
          setBmi();
        }}
      />
      <br />
      weight：
      <input
        type="text"
        value={weight}
        onChange={(e) => {
          // 先得到更動後的值
          const newWeight = e.target.value;
          setWeight(newWeight);
          //   setweight(twd2Usd(newWeight));
          setBmi();
        }}
      />
      <br />
      BMI:<span>{bmi}</span>
      <br />
      <button
        onClick={() => {
          //   const bmi = Math.pow(height, 2);
          const bmi = weight / Math.pow(height / 100, 2);
          setBmi(bmi);
        }}
      >
        calculate
      </button>
    </>
  );
}

// 輸出元件(函式)
export default App;
