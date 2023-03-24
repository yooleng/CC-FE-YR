// ----------------------------------------------------------------------------------
//  32-01. image-upload-preview (이미지 미리보기)
// ----------------------------------------------------------------------------------

import { ChangeEvent, useState } from "react";
// import { gql, useMutation } from "@apollo/client";
// import {
//   IMutation,
//   IMutationUploadFileArgs,
// } from "../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     # Upload! : gql에 내장된 타입
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

  //   const [uploadFile] = useMutation<
  //     Pick<IMutation, "uploadFile">,
  //     IMutationUploadFileArgs
  //   >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 파일이 있다면 0번째를 가져와줘
    // // 파일이 없으면 함수 종료
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
        // 게시판에서 event.target.id 대신 event.currentTarget.id를 썼던 이유 : event.target은 태그만을 가르키지 않음
        console.log(event.target?.result);
        setImageUrl(event.target?.result);
      } else {
        alert("파일이 없습니다. 다시 시도해주세요.");
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
    </>
  );
}
