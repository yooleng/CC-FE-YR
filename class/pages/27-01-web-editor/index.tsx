// ----------------------------------------------------------------------------------
//  27-01. web-editor
// ----------------------------------------------------------------------------------

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import { Modal } from "antd";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
  // ReactQuill 개발자들이 만든 onChange이므로 event가 들어오지 않음.
  const onChangeContents = (value: string) => {
    console.log("value", value);
  };

  // 다이나믹 라우팅 - code-splitting (코드 스플릿팅)
  const onClickSubmit = async () => {
    const { Modal } = await import("antd");
    Modal.success({ content: "등록에 성공하였습니다!" });
    // const { Modal } = dynamic(async () => await import("antd"), { ssr: false });
  };

  return (
    <div>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
