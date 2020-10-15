// ------todo_list------  //
// App_10.todoList

import React, { useState, useEffect } from "react";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import TodoApp3 from "./components/TodoApp3";

function App() {
  return (
    <>
      <MyNavbar />
      <main className="flex-shrink-0">
        <div className="container">
          <TodoApp3 />
        </div>
      </main>
      <MyFooter />
    </>
  );
}

export default App;
