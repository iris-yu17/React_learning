// ------todo_list------  //
// App_10.todoList

import React, { useState, useEffect } from "react";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MainContent from "./components/MainContent";
// import TodoApp1 from "./components/TodoApp1";
// import TodoApp2 from "./components/TodoApp2";
// import TodoApp3 from "./components/TodoApp3";
// import TodoApp4 from "./components/TodoApp4";
// import TodoApp5 from "./components/TodoApp5";
// import TodoApp6 from "./components/TodoApp6";
// import TodoApp7 from "./components/TodoApp7";
import TodoApp8 from "./components/TodoApp8";

function App() {
  return (
    <>
      <MyNavbar />
      <MainContent>
        <TodoApp8 />
      </MainContent>
      <MyFooter />
    </>
  );
}

export default App;
