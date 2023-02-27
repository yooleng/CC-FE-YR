// ----------------------------------------------------------------------------------
// 16-03. class-lifecycle
// ----------------------------------------------------------------------------------

import { Component } from "react";
import Router from "next/router";

interface IPrevState {
  count: number;
}

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행!");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행!");
  }

  componentWillUnmount() {
    console.log("사라질 때 실행!");
    // ex) 채팅방 나가기 api
  }

  onClickCountUp = () => {
    console.log(this.state.count);
    // this.setState((prevState: { count: number }) => ({
    // 위처럼 해도 되고, 아래처럼 인터페이스 만들어서 해도 됨!
    this.setState((prevState: IPrevState) => ({
      count: prevState.count + 1,
    }));
  };

  onClickMove() {
    void Router.push("/");
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기 !</button>
        <button onClick={this.onClickMove}>나가기 !</button>
      </>
    );
  }
}
