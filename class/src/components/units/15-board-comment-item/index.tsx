// ----------------------------------------------------------------------------------
// 15-03. comment-edit-3 - return 부분을 분리한 컴포넌트
// ----------------------------------------------------------------------------------
// 15-board-comment-item
// ----------------------------------------------------------------------------------

import { useState } from "react"
import { IBoard } from "../../../commons/types/generated/types"

interface IProps {
    el: IBoard
}

export default function BoardCommentItem(props: IProps) {
    const [isEdit, setIsEdit] = useState(false)

const onClickEdit = () => {
    setIsEdit(true)
}
    return (
        <>
         <div>
          {!isEdit && (
            <div >
              <span style={{ margin: "10px" }}>{props.el.writer} </span>
              <span style={{ margin: "10px" }}>{props.el.title}</span>
              <button onClick={onClickEdit}>수정하기</button>
            </div>
          )}
          {isEdit && (
            <div>
              수정할 내용: <input type="text" />
            </div>
          )}
        </div>
        </>
    )
}

