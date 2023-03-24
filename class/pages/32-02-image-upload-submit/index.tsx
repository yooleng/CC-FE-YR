// ----------------------------------------------------------------------------------
//  32-02. image-upload-submit
// ----------------------------------------------------------------------------------

import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    # Upload! : gql에 내장된 타입
    uploadFile(file: $file) {
      url
      size
    }
  }
`;

export default function ImageUploadPage() {
  // imageUrl = 미리보기용 - DB에 넣지 않음!
  const [imageUrl, setImageUrl] = useState(""); // 미리보기
  const [file, setFile] = useState<File>(); // 실제 파일

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [myfunction] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const resultFile = await uploadFile({ variables: { file } });
    const url = resultFile.data?.uploadFile.url;

    const result = await myfunction({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다",
          contents: "내용입니다",
          images: [url],
        },
      },
    });
    console.log(result);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 파일이 있다면 0번째를 가져와줘
    if (!file) return;
    console.log("# file", file);

    // uploadFile로 받아온 결과를 result 변수에 담음
    // result.data.uploadFile.url 이라는 값이 들어옴
    // try {
    //   const result = await uploadFile({ variables: { file } });
    //   setImageUrl(result.data?.uploadFile.url ?? "");
    //   console.log("# url", result.data?.uploadFile.url);
    // } catch (error) {
    //   if (error instanceof Error) Modal.error({ content: error.message });
    // }

    // 1. 임시 URL 생성 - (가짜 URL : 내 브라우저에서만 접근 가능)
    // const result = URL.createObjectURL(file);
    // setImageUrl(result);
    // console.log("# result", result);

    // 2. 임시 URL 생성 - (진짜 URL : 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        console.log(event.target?.result);
        setImageUrl(event.target?.result); // 미리보기
        setFile(file); // 실제 파일
      } else {
        alert("파일을 읽지 못했습니다. 다시 시도해주세요.");
      }
    };
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />

      {/* multiple 속성으로 파일 여러 개 드래그 가능 */}
      {/* <input type="file" onChange={onChangeFile} multiple={true} /> */}

      {/* 브라우저에서 바로 주소를 만들고 그걸 result에 저장 - googleStorage 필요 없음 */}
      <img src={imageUrl} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}

      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
