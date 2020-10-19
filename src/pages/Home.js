import React, { useState, useEffect } from "react";
import { Link, Switch, withRouter } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function Home(props) {
  return (
    <>
      <h1>Hello</h1>
      <Breadcrumb />
      <hr />
      {/* html的a: 瀏覽器重新刷新，所有元件會進入生命週期的第一期，初始化 */}
      <a href="/todo">a link to todopage</a>
      <hr />
      {/* link元件 */}
      <Link to="/todo">Link component to todopage</Link>
    </>
  );
}

export default withRouter(Home);
