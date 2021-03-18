// ------router------  //
// App_11.router
// App元件功能一: 組合各元件，變成一個頁面
// App元件功能二: 組合所有頁面
// App頁面通常專門用來放路由器(router)

import React, { useState, useEffect } from "react";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TodoAppPage from "./pages/TodoAppPage";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";

function App() { 
  // todos, setTodos 傳到 TodoAppPage 再傳到 TodoApp8
  // const [todos, setTodos] = useState([
  //   { id: 1, text: "買iphone 12", completed: false, edited: false },
  //   { id: 2, text: "學好react", completed: true, edited: false },
  //   { id: 3, text: "買牛奶", completed: false, edited: false },
  //   { id: 4, text: "買餅乾", completed: true, edited: false },
  // ]);


  return (
    <Router>
      <>
        <MyNavbar />
        {/* MainContent要包住switch */}
        <MainContent>
          {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
          {/* 路徑寫在switch(路由表) */}
          {/* 每新增一個頁面，就要到路由表來註冊 */}
          <Switch>
               {/* 舊寫法 */}
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={TodoAppPage} />

            {/* 新寫法 */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/todo">
              {/* <TodoAppPage todos={todos} setTodos={setTodos}/> */}
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/product">
              <Product />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  );
}

export default App;
