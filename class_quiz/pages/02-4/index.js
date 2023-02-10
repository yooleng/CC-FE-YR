// ----------------------------------------------------------------------------------
// day 2 : 리액트 훅스 (React-hooks)
// ----------------------------------------------------------------------------------
// 4. state를 활용하여 회원가입 폼 만들기
// ----------------------------------------------------------------------------------

import { useState } from "react";
import { ContentsBox, ErrorMessage, InputBox } from "./emotion";

export default function SignupStatePage() {
  // 초기값 세팅
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  // 오류메세지 상태 저장
  const [emailError, setEmailError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  // 유효성 검사
  const [isPasswordCheck, setIsPasswordCheck] = useState(false);

  // 이메일 input창이 변경됐을 때 실행 해줄 함수
  function onChangeEmail(event) {
    setEmail(event.target.value);

    if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다.");
    } else {
      setEmailError("사용 가능한 이메일입니다.");
    }
  }

  // 비밀번호 input창이 변경됐을 때 실행 해줄 함수
  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  // 비밀번호 확인

  function onChangePasswordCheck(event) {
    setPasswordCheck(event.target.value);
    if (password === event.target.value) {
      setPasswordCheckError("입력된 비밀번호가 같습니다.");
      setIsPasswordCheck(true);
    } else {
      setPasswordCheckError("입력된 비밀번호가 같지 않습니다.");
      setIsPasswordCheck(false);
    }
  }

  // 가입하기
  function onClickSignup() {
    // console.log("email", email);
    // console.log("password", password);
    // console.log("passwordCheck", passwordCheck);

    alert("회원가입을 축하합니다.");
    window.location.reload();
  }

  return (
    <>
      <ContentsBox>
        <h3>Signup</h3>
        <InputBox>
          이메일: <input type="text" onChange={onChangeEmail} />
          <ErrorMessage>{emailError}</ErrorMessage>
        </InputBox>
        <InputBox>
          비밀번호: <input type="password" onChange={onChangePassword} />
        </InputBox>
        <InputBox>
          비밀번호 확인:{" "}
          <input type="password" onChange={onChangePasswordCheck} />
          <ErrorMessage>{passwordCheckError}</ErrorMessage>
        </InputBox>
        <button onClick={onClickSignup}>가입하기</button>
      </ContentsBox>
    </>
  );
}
