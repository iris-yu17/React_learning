import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { Redirect } from "react-router-dom";

// 擴充屬性的2個方法
// 1.用HOC(higher-orer component)  class,function型元件都可用
// 用withRouter來擴充props，得到3個屬性(match, history, location)
// import { Link, Switch, withRouter } from "react-router-dom";

// 2.用勾子  function型元件才可用
import { Link, Switch, useParams } from "react-router-dom";

function Product(props) {
  console.log(props);

  // 接會員狀態
  const { isAuth } = props;
  // 2.用勾子  // 解構賦值
  let { id1234 } = useParams();
  // Redirect: 若沒登入，轉到註冊頁面
  // Redirect本身是個元件
  if (isAuth === false) return <Redirect to="/register" />;
  return (
    <>
      <h1>Product</h1>
      <Breadcrumb />
      {/* 1.用HOC(higher-orer component) */}
      {/* <h3>{props.match.params.id}</h3> */}
      {/* 2.用勾子 */}
      {/* 參數名字看當初App.js的product route是定義甚麼 */}
      <h3>{id1234}</h3>
      <h3>目前會員狀態：{isAuth ? "登入" : "登出"}</h3>
    </>
  );
}

// 1.用HOC(higher-orer component)
// 導出時要擴充，才會得到3個屬性
// export default withRouter(Product);

// // 2.用勾子
export default Product;
