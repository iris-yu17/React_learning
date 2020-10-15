// ------將每個待辨事項改為物件值，才可以改他的狀態------ //
// TodoApp2

import React, { useState, useEffect } from "react";

function TodoApp2(props) {
  const [todoInput, setTodoInput] = useState("123");
  // 將每個待辨事項改為物件值
  // { id, text: string, completed: bool }
  const [todos, setTodos] = useState([
    // 因index會變動，設id值
    { id: 1, text: "買iphone 12", completed: false },
    { id: 2, text: "學好react", completed: true },
  ]);

  return (
    <>
      <h1 className="mt-5">範例：待辨事項</h1>

      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          //處理按下Enter
          if (e.key === "Enter" && e.target.value) {
            // 建立一個新的todo項目
            const newItem = {
              // 用當下時間的微秒當id
              id: +new Date(),
              text: e.target.value,
              completed: false,
            };

            // 建立新的陣列(合併原本的todos陣列中的值)
            const newTodos = [newItem, ...todos];

            // 設定todos狀態值
            setTodos(newTodos);

            // 清空輸入框
            setTodoInput("");
          }
        }}
      />
      <hr />

      <ul>
        {/* Array.prototype.map():會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。 */}
        {/* map使用時通常子元素會要求唯一key值(id值)  */}
        {/* 這裡用id作為key值  */}
        {/* 依照每個項目的completed來控制呈現的樣子  */}
        {todos.map((value, index) =>
          value.completed ? (
            <li key={value.id}>
              <del>{value.text}</del>
            </li>
          ) : (
            <li key={value.id}>{value.text}</li>
          )
        )}
      </ul>
    </>
  );
}

export default TodoApp2;
