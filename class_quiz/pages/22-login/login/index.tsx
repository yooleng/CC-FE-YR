// ----------------------------------------------------------------------------------
//  day 22-01. login (로그인 적용하기)
//  path : http://localhost:3000/22-login/login
// ----------------------------------------------------------------------------------

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import { useRouter } from "next/router";
import { Modal } from "antd";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { ButtonBox, InputBox, TextBox } from "./emotion";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
      __typename
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      console.log("accessToken", accessToken);

      if (!accessToken) {
        Modal.error({ content: "로그인을 먼저 해주세요" });
        return;
      }
      setAccessToken(accessToken);

      void router.push("./login-success");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
      router.push("./login");
    }
  };

  return (
    <>
      <InputBox>
        <TextBox>ID : </TextBox>
        <input type="text" onChange={onChangeEmail} />
      </InputBox>
      <InputBox>
        <TextBox>password : </TextBox>
        <input type="password" onChange={onChangePassword} />
      </InputBox>
      <ButtonBox>
        <button onClick={onClickLogin}>로그인하기</button>
      </ButtonBox>
    </>
  );
}
