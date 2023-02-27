// ----------------------------------------------------------------------------------
// 16-02. class-counter
// ----------------------------------------------------------------------------------

import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = () => {
    console.log(this.state.count);
    this.setState({
      count: 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기 !</button>
      </>
    );
  }
}

// class AAA {
//   power = 50;
//   attack() {}
// }

// class BBB extends AAA { // 상속
//   run() {}
// }

// const mybbb = new BBB();
// mybbb.attack;
// mybbb.power;
// mybbb.run;
// // 상속 받음
