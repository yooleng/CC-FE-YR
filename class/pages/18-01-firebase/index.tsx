// ----------------------------------------------------------------------------------
// 18-01. firebase
// ----------------------------------------------------------------------------------

import { firebaseApp } from "../_app";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";

export default function FirebasePage() {
  const onClickSubmit = () => {
    //  const board = collection (getFirestore(파이어베이스 접속 정보), "board")
    const board = collection(getFirestore(firebaseApp), "board");
    void addDoc(board, {
      writer: "철수",
      title: "이건 철수가 쓴 제목",
      contents: "이건 내용!",
    });
  };

  const onClickFetch = async () => {
    // const board = collection (getFirestore(파이어베이스 접속 정보), "board")
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };
  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
