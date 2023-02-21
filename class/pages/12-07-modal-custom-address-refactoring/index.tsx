// ----------------------------------------------------------------------------------
// ant-Design, Material-UI
// ----------------------------------------------------------------------------------
// 12-07. modal-custom-address-refactoring
// ----------------------------------------------------------------------------------

// 리팩토링(refactoring) : 결과는 똑같은데 내용이 효율적으로 변하는 것

import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { Modal } from "antd";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  // const showModal = () => {
  //   setIsOpen((prev) => !prev); // false를 가지고 와서 true로 바꿈
  // };

  // const handleOk = () => {
  //   setIsOpen((prev) => !prev); // true를 가지고 와서 false로 바꿈
  // };

  // const handleCancel = () => {
  //   setIsOpen((prev) => !prev); // true를 가지고 와서 false로 바꿈
  // };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // 스위치 (on/off) : 기존 값에서 반대 (true/false)
  // boolean 변수를 스위치 변수라고도 부른다.
  // 위처럼 코드가 중복될 때 하나로 리팩토링 가능

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    console.log("address", address);
    onToggleModal();
  };

  return (
    <>
      {/* 모달 종료 방식 (2가지) */}

      {/* 1. 모달 숨기기 - 눈에만 안보이도록 CSS로 숨김처리 되는 것 */}
      {/* ex. 이력서 등 */}

      <button onClick={onToggleModal}>모달창 열기 1</button>
      <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>

      {/* 2. 모달 삭제하기 */}
      {/* 조건부 렌더링 사용 - isOpen이 true면 모달 열림, false면 모달 닫기 */}
      {/* state가 바뀌면 리렌더링 되는 원리를 이용 */}
      {/* ex. 신용카드, 비밀번호 등 */}

      <button onClick={onToggleModal}>모달창 열기 2</button>
      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
