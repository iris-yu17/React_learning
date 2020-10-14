import React, { useState } from "react";

function MoneyInput(props) {
  return (
    <>
      {props.title}：
      <input
        type="text"
        value={props.money}
        onChange={(event) => {
          // 轉成數字進入state中(用+轉成數字)
          props.setMoney(+event.target.value);
        }}
      />
    </>
  );
}

export default MoneyInput;
