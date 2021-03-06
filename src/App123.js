import React, { useState, useEffect } from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import TodoAppPage from './pages/TodoAppPage'
import Home from './pages/Home'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link> */}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todo">
              <TodoAppPage todos={todos} setTodos={setTodos} />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
