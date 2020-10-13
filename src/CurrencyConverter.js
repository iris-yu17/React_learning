// 導入其它的模組
import React, { useState } from "react";
import ConvertButton from "./components/ConvertButton";


function CurrencyConverter() {
  const [show, setShow] = useState(true);

  return (
    <>

    <ConvertButton title="convert" clickMethod={() => setShow(true)} />

    </>
  );
}

// 輸出元件(函式)
export default CurrencyConverter;
