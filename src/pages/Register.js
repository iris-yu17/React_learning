import React, { useState, useEffect } from "react";
import { Link, Switch } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function Register(props) {
  let data = {};
  let account;
  let name;
  let email;
  let password;
  let confirmpassword;

  const saveInfo = () => {
    account = document.querySelector("#account").value;
    name = document.querySelector("#name").value;
    email = document.querySelector("#email").value;
    password = document.querySelector("#password").value;
    confirmpassword = document.querySelector("#confirmpassword").value;
    data = {
      account: account,
      name: name,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    };
    // console.log(data.strin);
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <>
      <h1>會員註冊頁面</h1>
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
          <label for="exampleInputEmail1">姓名</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="text"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">密碼</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">確認密碼</label>
          <input type="password" class="form-control" id="confirmpassword" />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => saveInfo()}
        >
          註冊
        </button>
      </form>
    </>
  );
}

export default Register;
