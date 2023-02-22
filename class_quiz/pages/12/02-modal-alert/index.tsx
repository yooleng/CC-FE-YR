// ----------------------------------------------------------------------------------
// day 12 - 02. modal-alert
// ----------------------------------------------------------------------------------

import { Modal } from "antd";

const success = () => {
  Modal.success({
    title: "게사글 등록",
    content: "게시글이 등록되었습니다.",
  });
};

const App: React.FC = () => (
  <>
    <button onClick={success}>모달열기</button>
  </>
);

export default App;
