// 導入react函式庫
import React from "react";

// 繼承類別
class LifeCycleClass extends React.Component {
  // 建構式
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };

    console.log("constructor");
  }

  // componentDidMount 保證虛擬dom出現在畫面上
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  //setState是異步執行，componentDidUpdate可保證setState已完成
  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log(this.state.total);
  }

  // render的回傳值即為最後呈現在網頁上的元素
  render() {
    console.log("render");
    return (
      <>
        <button
          onClick={() => {
            this.setState({ total: 2 });
          }}
        >
          Change State
        </button>
      </>
    );
  }
}

export default LifeCycleClass;
