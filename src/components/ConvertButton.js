// 導入其它的模組
import React, { useState } from "react";

function ConvertButton(props) {
  const [Usd, setUsd] = useState(3);
  const [Twd, setTwd] = useState(2);

  return (
    <>
      <span>USD</span>
      <input name="myfield" value={Usd}></input>
      <br></br>
      <button onClick={() => setUsd(Twd*123)}>asdafs</button>
      <br></br>
      <span>TWD</span>
      <input name="myfield" value={Twd}></input>
    </>
  );
}

// 輸出元件(函式)
export default ConvertButton;
