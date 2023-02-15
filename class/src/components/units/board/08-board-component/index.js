// ----------------------------------------------------------------------------------
// 08. board-component
// ----------------------------------------------------------------------------------

export default function BoardComponent(props) {
  return (
    <>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      {/* isEdit가 true이면 수정, false이면 등록 */}
      제목: <input type="text" />
      <br />
      내용: <input type="text" />
      <br />
      <button>{props.isEdit ? "수정" : "등록"}하기</button>
    </>
  );
}
