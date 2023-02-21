// ----------------------------------------------------------------------------------
// ant-Design, Material-UI
// ----------------------------------------------------------------------------------
// 12-05. modal-custom-address
// ----------------------------------------------------------------------------------

import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
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

  const handleComplete = (address: Address) => {
    console.log("address", address);
    setIsOpen(false);
  };

  return (
    <>
      {/* 모달 종료 방식 (2가지) */}

      {/* 1. 모달 숨기기 - 눈에만 안보이도록 CSS로 숨김처리 되는 것 */}
      {/* ex. 이력서 등 */}

      <button onClick={showModal}>모달창 열기 1</button>
      <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>

      {/* 2. 모달 삭제하기 */}
      {/* 조건부 렌더링 사용 - isOpen이 true면 모달 열림, false면 모달 닫기 */}
      {/* state가 바뀌면 리렌더링 되는 원리를 이용 */}
      {/* ex. 신용카드, 비밀번호 등 */}

      <button onClick={showModal}>모달창 열기 2</button>
      {isOpen && (
        <Modal open={true} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
