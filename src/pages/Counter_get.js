import React, { useState, useEffect } from "react";

function Counter(props) {
  const [total, setTotal] = useState(0);
  // 指示器: 指示是否在載入
  const [dataLoading, setDataLoading] = useState(false);

  // 載入資料用
  async function getTotalFromServer() {
    // 開啟載入的指示圖示
    setDataLoading(true);

    const url = "http://localhost:5555/counter/1";

    const request = new Request(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    // 得到response
    const response = await fetch(request);
    console.log(response);
    // 得到response後, 用json()解開 (可以透過 blob(), json(), text() 轉成可用的資訊)
    // https://wcc723.github.io/javascript/2017/12/28/javascript-fetch/
    // https://stackoverflow.com/questions/43654224/difference-between-json-parse-and-json-in-javasscript
    const data = await response.json();
    console.log(data);

    setTotal(data.total);
  }

  // componentDidMount
  useEffect(() => {
    getTotalFromServer();
  }, []);

  // 每次total資料有改變，2秒後關起載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 2000);
  }, [total]);

  const loading = (
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  const display = (
    <>
      <h1>{total}</h1>
      <button onClick={() => {}}>+1</button>
      <button onClick={() => {}}>-1</button>
    </>
  );

  // if dataLoading is true, show loading, else show display
  return dataLoading ? loading : display;
}

export default Counter;
