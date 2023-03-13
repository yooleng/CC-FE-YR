// ----------------------------------------------------------------------------------
//  24-03. react-hook-form-with-yup
// ----------------------------------------------------------------------------------

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요."),
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
  password: yup.string().required("비밀번호를 입력해주세요."),

  // email: yup
  //   .string()
  //   .email("이메일 형식이 적합하지 않습니다.")
  //   .required("이메일은 필수 입력입니다."),
  // password: yup
  //   .string()
  //   .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
  //   .max(15, "비밀번호는 최대 15자리로 입력해주세요.")
  //   .required("비밀번호는 필수 입력입니다."),
  // phone: yup
  //   .string()
  //   .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 번호 형식에 알맞지 않습니다.")
  //   .required("휴대폰 번호는 필수 입력입니다. "),
});

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
}

export default function ReactHookFormPage() {
  // react-hook-form DOCS를 보고 만들기
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),

    // 입력할 때마다 매번 검증하기 위해 제어 컴포넌트로 바꾸기 (변경할 때마다 검증하겠다 - 리렌더링)
    mode: "onChange", // 트리거(trigger)
  });

  const onClickSubmit = (data: IFormData) => {
    console.log("data", data);
  };

  // console.log("리렌더링 되나요?");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자 : <input type="text" {...register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      제목 : <input type="text" {...register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용 : <input type="text" {...register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      비밀번호 : <input type="password" {...register("password")} />
      <div>{formState.errors.password?.message}</div>
      {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button style={{ backgroundColor: formState.isValid ? "yellow" : "" }}>
        등록하기
      </button>
    </form>
  );
}

/* 
    <button type="button">나만의버튼</button>
    <button type="submit">보내기(전송하기)</button> // 기본값
    <button type="reset">지우기(초기화)</button> 
*/
