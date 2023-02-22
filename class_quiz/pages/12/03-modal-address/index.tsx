// ----------------------------------------------------------------------------------
// day 12 - 03. modal-address
// ----------------------------------------------------------------------------------

import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { Modal } from "antd";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    console.log("address", address);
    setSelectedAddress(`${address.address} ${address.buildingName}`);
    onToggleModal();
  };

  const handleCancel = () => {
    setSelectedAddress("");
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달열기</button>

      {isOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
      <p>선택한 주소: {selectedAddress}</p>
    </>
  );
}
