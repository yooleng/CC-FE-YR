// ----------------------------------------------------------------------------------
//  19-02. image-ref - 버튼 숨김처리하기 / 가짜 버튼 (UseRef)
// ----------------------------------------------------------------------------------

import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState("");

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("# file", file);
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
      />
      {/* <input type="file" onChange={onChangeFile} multiple={true} /> */}
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </>
  );
}
