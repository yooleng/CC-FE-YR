// ----------------------------------------------------------------------------------
//  day 24. form-library (react-hook-form)
// ----------------------------------------------------------------------------------

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

const regex =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{1,8}$/;

const schema = yup.object({
  writer: yup
    .string()
    .max(5, "작성자는 5글자 이내로 입력해주세요.")
    .required("작성자를 입력해주세요."),
  title: yup
    .string()
    .max(100, "제목은 100자 이내로 입력해주세요.")
    .required("제목을 입력해주세요."),
  contents: yup
    .string()
    .max(1000, "내용은 1000자 이내로 입력해주세요.")
    .required("내용을 입력해주세요."),
  password: yup
    .string()
    .max(8, "비밀번호는 8자 이내로 입력해주세요.")
    .matches(regex, "비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.")
    .required("비밀번호를 입력해주세요."),
});

interface IFormData {
  writer: string;
  title: string;
  contents: string;
  password: string;
}

export default function Quiz24() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormData) => {
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자: <Input01 type="text" register={register("writer")} />
      <div>{formState.errors.writer?.message}</div>
      제목: <Input01 type="text" register={register("title")} />
      <div>{formState.errors.title?.message}</div>
      내용: <Input01 type="text" register={register("contents")} />
      <div>{formState.errors.contents?.message}</div>
      비밀번호: <Input01 type="password" register={register("password")} />
      <div>{formState.errors.password?.message}</div>
      <Button01 title="등록하기" isActive={formState.isValid} />
    </form>
  );
}
