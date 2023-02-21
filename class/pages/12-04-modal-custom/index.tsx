// ----------------------------------------------------------------------------------
// ant-Design, Material-UI
// ----------------------------------------------------------------------------------
// 12-04. modal-custom
// ----------------------------------------------------------------------------------

import { Modal } from "antd";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>
      <Modal
        title="모달 제목"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력: <input type="password" />
      </Modal>
    </>
  );
}
