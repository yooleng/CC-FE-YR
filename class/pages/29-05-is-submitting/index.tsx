// ----------------------------------------------------------------------------------
//  29-05. is-submitting
// ----------------------------------------------------------------------------------

import axios from "axios";
import { useState } from "react";
// import { useForm } from "react-hook-form";

export default function isSubmittingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [myData, setMyData] = useState<any>();

  // react-hook-form을 사용하면 아래와 같이 쓸 수 있음
  // const {formState} = useForm()
  // formState.isSubmitting

  const onClickSubmit = async () => {
    setIsSubmitting(true);

    const result = await axios.get("https://koreanjson.com/posts/2");
    console.log(result);
    setMyData(result);

    setIsSubmitting(false);
  };

  return (
    <>
      <button onClick={onClickSubmit} disabled={isSubmitting}>
        등록하기 등의 API 요청 버튼
      </button>
    </>
  );
}
