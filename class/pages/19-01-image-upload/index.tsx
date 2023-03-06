// ----------------------------------------------------------------------------------
//  19-01. image-upload - 이미지 업로드하기
// ----------------------------------------------------------------------------------

import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    # Upload! : gql에 내장된 타입
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 파일이 있다면 0번쨰를 가져와줘
    console.log("# file", file);

    // uploadFile로 받아온 결과를 result 변수에 담음
    // result.data.uploadFile.url 이라는 값이 들어옴
    try {
      const result = await uploadFile({ variables: { file } });
      setImageUrl(result.data?.uploadFile.url ?? "");
      console.log("# url", result.data?.uploadFile.url);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      <input type="file" onChange={onChangeFile} />

      {/* multiple 속성으로 파일 여러 개 드래그 가능 */}
      {/* <input type="file" onChange={onChangeFile} multiple={true} /> */}

      {/* 업로드 한 이미지 화면에 렌더링 - 구글 캄퓨터에 저장된 것이므로 주소 추가 */}
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
