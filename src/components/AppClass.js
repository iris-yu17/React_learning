// 導入react函式庫
import React from "react";

// extends: 繼承React裡的Component類別
class AppClass extends React.Component {
  // 建構式: 產生實體初始值
  constructor() {
    // 建構式第一行必要呼叫super
    // super(): 呼叫上層類別(React.Component)的建構式
    super();
    // this.state 這個元件的狀態
    this.state = {
      // 設定初始值
      total: 100,
    };
  }

  // render的回傳值即為最後呈現在網頁上的元素
  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        {/* setState: class型元件的內建方法 */}
        {/* setState: 唯一可以改變state的方法 */}
        {/* 讓total = this.state.total + 1 */}
        <button onClick={() => this.setState({ total: this.state.total + 1 })}>
          +1
        </button>
        <button onClick={() => this.setState({ total: this.state.total - 1 })}>
          -1
        </button>
      </>
    );
  }
}

export default AppClass;
