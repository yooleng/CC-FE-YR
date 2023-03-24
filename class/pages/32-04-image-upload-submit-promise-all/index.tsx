// ----------------------------------------------------------------------------------
//  32-04. image-upload-submit-promise-all
// ----------------------------------------------------------------------------------

import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
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
  // const [imageUrl, setImageUrl] = useState(""); // 미리보기
  // const [file, setFile] = useState<File>(); // 실제 파일

  const [imageUrls, setImageUrls] = useState(["", "", ""]); // 미리보기
  const [files, setFiles] = useState<File[]>([]); // 실제 파일

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [myfunction] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    // // 1. Promise.all 안썼을 때

    // // for (let i = 0; i <= 2; i++) {
    // //   await uploadFile({ variables: { file: files[i] } });
    // // } // for문을 돌면서 하나씩 다 await로 기다리므로 6초 걸린 애랑 똑같음

    // const resultFile0 = await uploadFile({ variables: { file: files[0] } });
    // const resultFile1 = await uploadFile({ variables: { file: files[1] } });
    // const resultFile2 = await uploadFile({ variables: { file: files[2] } });
    // const url0 = resultFile0.data?.uploadFile.url;
    // const url1 = resultFile1.data?.uploadFile.url;
    // const url2 = resultFile2.data?.uploadFile.url;

    // const resultUrls = [url0, url1, url2]; // [dog1.jpg, dog2.jpg, dog3.jpg]

    // // 2. Promise.all 썼을 때
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);
    // console.log(results); // [resultFile0, resultFile1, resultFile2]
    // const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : "")); // [dog1.jpg, dog2.jpg, dog3.jpg]

    // 3. Promise.all 썼을 때 (리팩토링)
    // files - [File0, File1, File2]
    // files.map(el => uploadFile({ variables: { file: el } })) // [ uploadFile({...:File0}), uploadFile({...:File1}), ...]

    const results = await Promise.all(
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );
    console.log(results); // [resultFile0, resultFile1, resultFile2]
    const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : "")); // [dog1.jpg, dog2.jpg, dog3.jpg]

    const result = await myfunction({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다",
          contents: "내용입니다",
          images: resultUrls, // [url0, url1, url2]
        },
      },
    });
    console.log(result);
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
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

          // setImageUrls(event.target?.result); // 미리보기
          // setFiles(file); // 실제 파일

          const tempUrls = [...imageUrls]; // imageUrls의 원본을 바꾸지 않기 위해
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files]; // files의 원본을 바꾸지 않기 위해
          tempFiles[index] = file;
          setFiles(tempFiles);
        } else {
          alert("파일을 읽지 못했습니다. 다시 시도해주세요.");
        }
      };
    };

  return (
    <>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />

      {/* multiple 속성으로 파일 여러 개 드래그 가능 */}
      {/* <input type="file" onChange={onChangeFile} multiple={true} /> */}

      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />

      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
