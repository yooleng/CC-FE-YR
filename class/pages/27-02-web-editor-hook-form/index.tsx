// ----------------------------------------------------------------------------------
//  27-02. web-editor-hook-form
// ----------------------------------------------------------------------------------

// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
// import { Modal } from "antd";
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  // ReactQuill 개발자들이 만든 onChange이므로 event가 들어오지 않음.
  const onChangeContents = (value: string) => {
    console.log("value", value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐다고 react-hook-form에 강제로 알려주는 기능!
    void trigger("contents");
  };

  // 다이나믹 라우팅 - code-splitting (코드 스플릿팅)
  const onClickSubmit = async () => {
    const { Modal } = await import("antd");
    Modal.success({ content: "등록에 성공하였습니다!" });
  };

  return (
    <div>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}
