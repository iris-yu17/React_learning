// 導入react函式庫
import React from "react";

// 繼承類別
class ClockClass extends React.Component {
  // 建構式: 產生實體初始值
  constructor(props) {
    super(props);
    this.state = {
      // 設定初始值
      // new Date() 原生js
      date: new Date(),
    };
  }

  // 每秒指定新的(日期時間)狀態
  componentDidMount() {
    // setInterval會產生一個id
    this.timer123Id = setInterval(() => {
      this.tick();
    }, 1000);
  }

  // 元件移除時要清除timerId
  componentWillUnmount() {
    clearInterval(this.timer123Id);
  }

  // 做綁定 參考homework_bmi/BMIClass.js
  tick = () => {
    this.setState({ date: new Date() });
  };

  // render的回傳值即為最後呈現在網頁上的元素
  render() {
    return <>{this.state.date.toLocaleTimeString()}</>;
  }
}

export default ClockClass;
