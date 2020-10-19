import React, { useState, useEffect } from "react";

function Login(props) {
  // 接會員狀態
  const { isAuth, setIsAuth } = props;

  let account;
  let password;
  const checkdata = () => {
    let registerredData = JSON.parse(localStorage.getItem("data"));
    console.log(registerredData.name);

    account = document.querySelector("#account").value;
    password = document.querySelector("#password").value;

    if (
      (account =
        registerredData.account && password === registerredData.password)
    ) {
      alert("yes");
    }
    return;
  };
  return (
    <>
      <h1>會員登入登出</h1>
      <h3>目前會員狀態：{isAuth ? "登入" : "登出"}</h3>
      <button onClick={() => setIsAuth(true)}>登入</button>
      <button onClick={() => setIsAuth(false)}>登出</button>
      <hr />
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">帳號</label>
          <input
            type="text"
            class="form-control"
            id="account"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">密碼</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            記得我
          </label>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => checkdata()}
        >
          登入
        </button>
      </form>
    </>
  );
}

export default Login;
