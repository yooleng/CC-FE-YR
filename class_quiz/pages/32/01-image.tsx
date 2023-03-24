// ----------------------------------------------------------------------------------
//  day 32-01. 이미지 업로드 성능 최적화
// ----------------------------------------------------------------------------------

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      images
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImageUploadPage() {
  const [imageUrls, setImageUrls] = useState(["", "", ""]); // 미리보기
  const [files, setFiles] = useState<File[]>([]); // 실제 파일

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [password, setPassword] = useState("");

  const [myfunction] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const results = await Promise.all(
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );
    console.log(results);
    const resultUrls = results.map((el) => (el ? el.data?.uploadFile.url : "")); // [dog1.jpg, dog2.jpg, dog3.jpg]

    const result = await myfunction({
      variables: {
        createBoardInput: {
          writer: writer,
          password: password,
          title: title,
          contents: contents,
          images: resultUrls,
        },
      },
    });
    console.log(result);
  };

  const onChangeWriter = (event: any) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: any) => {
    setPassword(event.target.value);
  };

  const onChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const onChangeFile =
    (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;
      console.log("# file", file);

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        if (typeof event.target?.result === "string") {
          console.log(event.target?.result);

          const tempUrls = [...imageUrls];
          tempUrls[index] = event.target?.result;
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[index] = file;
          setFiles(tempFiles);
        } else {
          alert("파일을 읽지 못했습니다. 다시 시도해주세요.");
        }
      };
    };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter} />
      <br />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContents} />
      <br />
      <input type="file" onChange={onChangeFile(0)} />
      <img src={imageUrls[0]} />
      <button onClick={onClickSubmit}>저장하기</button>
    </>
  );
}
