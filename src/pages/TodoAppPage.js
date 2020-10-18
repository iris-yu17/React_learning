import React, { useState, useEffect } from "react";
import TodoApp8 from "../components/TodoApp8";

function TodoAppPage(props) {
  // 過水
  //  todos, setTodos 傳到 TodoAppPage 再傳到 TodoApp8
  return <TodoApp8 {...props} />;
}

export default TodoAppPage;
