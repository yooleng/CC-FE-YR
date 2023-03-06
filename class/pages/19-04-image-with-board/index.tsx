// ----------------------------------------------------------------------------------
//  19-04. image-with-board - 04-04. graphql-mutation-input 파일과 합치기
// ----------------------------------------------------------------------------------

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef, useState } from "react";
import { checkValiationFile } from "../../src/commons/libraries/validationFile";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

// graphql 쿼리문
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
      size
    }
  }
`;

export default function GraphqlMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  // 변수를 state에 저장하기
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [myfunction] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await myfunction({
      variables: {
        createBoardInput: {
          writer: writer,
          password: "1234",
          title: title,
          contents: contents,
          images: [imageUrl],
        },
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("# file", file);

    const isValid = checkValiationFile(file);
    if (!isValid) return;

    try {
      const result = await uploadFile({ variables: { file } });
      setImageUrl(result.data?.uploadFile.url ?? "");
      console.log("# url", result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <>
      작성자: <input type="text" onChange={onChangeWriter} />
      <br />
      제목: <input type="text" onChange={onChangeTitle} />
      <br />
      내용: <input type="text" onChange={onChangeContents} />
      <br />
      {/* 가짜 버튼 생성 */}
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "lightgray",
          cursor: "pointer",
        }}
        onClick={onClickImage}
      >
        이미지 선택
      </div>
      {/* 기존 버튼은 숨김처리 */}
      <input
        style={{ display: "none" }}
        type="file"
        onChange={onChangeFile}
        ref={fileRef} // fileRef와 Input을 연결 : qqq.click 을 하면 input이 click
        accept="image/png" // png 파일을 제외한 확장자는 선택부터 안됨
      />
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
      <button onClick={onClickSubmit}>게시물 등록하기</button>
    </>
  );
}
