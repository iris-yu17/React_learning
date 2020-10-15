// ------todo_list------  //
// App_10.todoList

import React, { useState, useEffect } from "react";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
// import TodoApp1 from "./components/TodoApp1";
// import TodoApp2 from "./components/TodoApp2";
// import TodoApp3 from "./components/TodoApp3";
import TodoApp4 from "./components/TodoApp4";


function App() {
  return (
    <>
      <MyNavbar />
      <main className="flex-shrink-0">
        <div className="container">
          <TodoApp4 />
        </div>
      </main>
      <MyFooter />
    </>
  );
}

export default App;
