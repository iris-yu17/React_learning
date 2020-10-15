import React, { useState, useEffect } from "react";

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState("123");
  const [todos, setTodos] = useState(["買iphone 12 pro max", "學好react"]);

  return (
    <>
      <h1 className="mt-5">範例：待辨事項</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <hr />
      <ul>
        {/* Array.prototype.map():會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。 */}
        {/* map(function callback( currentValue[, index[, array]]) */}
        {todos.map((value123, index) => {
          //react有map就要有key
          return <li key={index}>{value123}</li>;
        })}
      </ul>
    </>
  );
}

export default TodoApp;
