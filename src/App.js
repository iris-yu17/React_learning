// ------todo_list------  //
// App_11.withRouter

import React, { useState, useEffect } from "react";

import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import TodoAppPage from "./pages/TodoAppPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [todos, setTodos] = useState([]);
  // 會員狀態放在App頁才能保持狀態，並讓下面所有頁面都能使用此狀態
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <TodoAppPage todos={todos} setTodos={setTodos} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login isAuth={isAuth} setIsAuth={setIsAuth} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {/* 定義參數值，?表示可有可無 */}
            <Route path="/product/:id1234?">
              <Product isAuth={isAuth} />
            </Route>
            {/* 404頁面，要放在路由表最後一個 */}
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  );
}

export default App;
