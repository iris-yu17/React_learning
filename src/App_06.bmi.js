// ---------bmi calculator--------- //
// App_06.bmi

// 導入其它的模組
import React, { useState } from "react";

function App(props) {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <>
      Your height (cm)：
      <input
        type="text"
        value={height}
        onChange={(e) => {
          // 因setXXX 會異步執行，先得到更動後的值
          const newHeight = e.target.value;
          setHeight(newHeight);
        }}
      />
      <br />
      Your weight (kg)：
      <input
        type="text"
        value={weight}
        onChange={(e) => {
          // 先得到更動後的值
          const newWeight = e.target.value;
          setWeight(newWeight);
        }}
      />
      <br />
      Your BMI:<span>{bmi}</span>
      <br />
      comment:<span>{comment}</span>
      <br />
      <button
        onClick={() => {
          //   const bmi = Math.pow(height, 2);
          const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
          setBmi(bmi);

          bmi < 18.5
            ? setComment(" underweight")
            : 18.5 < bmi < 24.9
            ? setComment(" normal weight")
            : 25 < bmi < 29.9
            ? setComment(" overweight")
            : setComment(" obesity");

          // if (bmi < 18.5) {
          //   setComment(" underweight");
          // } else if (18.5 < bmi < 24.9) {
          //   setComment(" normal weight");
          // } else if (25 < bmi < 29.9) {
          //   setComment(" overweight");
          // } else {
          //   setComment(" obesity");
          // }
        }}
      >
        calculate
      </button>
    </>
  );
}

// 輸出元件(函式)
export default App;
