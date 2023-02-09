// ----------------------------------------------------------------------------------
// 02-03. signup-state
// ----------------------------------------------------------------------------------

import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // getElementById 대신 useState 사용해서 구현하기
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // eventhandler 함수
  // on으로 시작하는 함수들은 사용자의 행동에 의해 실행되는 속성을 가지고 있다.
  // 즉, 여기 연결된 함수들은 항상 event가 들어온다.

  // 이메일 input창이 변경됐을 때 실행 해줄 함수
  function onChangeEmail(event) {
    console.log("event", event);
    // event : 어떤 행위를 했는가

    console.log("event.target", event.target);
    // event.target : 그 행위가 연결된 대상 (어떤 태그에서 행위를 했는지 (Input 태그))

    console.log("event.target.value", event.target.value);
    // event.target.value : 그 태그에 등록된 값

    setEmail(event.target.value);
    // event.target에 입력할 때마다 그 값이 setEmail에 저장된다.
  }

  // 비밀번호 input창이 변경됐을 때 실행 해줄 함수
  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup() {
    // 이메일과 비밀번호가 진짜 포장이 잘 됐는지 확인해보기
    console.log("email", email);
    console.log("password", password);

    // 검증하기
    // 요즘 트렌드는 양식 검증 이후 alert보다는 아래 바로 안내문구가 나오도록 코드를 짜는 추세
    // -> 구현방법 : 아래 return에 빈 <div>태그 만들기
    // 알림창을 띄우지 않고, 이메일 아래 error가 있는 <div>의 InnerText에 메세지 넣기
    // 이 <div>에 emotion으로 스타일을 줘서 가독성 높이기

    if (email.includes("@") === false) {
      // document.getElementById("emailError").innerHTML =
      //   "이메일이 올바르지 않습니다.";
      // getElementById 대신 state 사용
      // alert("이메일이 올바르지 않습니다.");
      setEmailError("이메일이 올바르지 않습니다.");
    } else {
      // 메세지 알림 이전, Backend 컴퓨터에 있는 API(함수) 요청하기
      // document.getElementById("passwordError").innerHTML =
      //   "회원가입을 축하합니다.";
      // alert("회원가입을 축하합니다.");
      setPasswordError("회원가입을 축하합니다.");
    }
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      {/* <div id="emailError"></div> */}
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword} />
      {/* <div id="passwordError"></div> */}
      <div>{passwordError}</div>
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
