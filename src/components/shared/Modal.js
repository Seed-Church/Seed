import React from "react";
import ModalReact from "react-modal";
import ButtonArmy from '../shared/ButtonArmy'
ModalReact.setAppElement("#root");
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      // marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

const Modal = ({isOpen,onAfterOpen,onRequestClose,closeModal,handle,userId}) => {
  return (
    <ModalReact
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal">
      <div className="modal-content py-4 text-left px-6">
        <div className="flex justify-between items-center pb-3">
          <p className="text-2xl font-bold">⚠️ จะลบข้อมูลผู้ใช้จริง ๆ หรอ ! </p>
        </div>
        <div className="flex justify-end pt-2">
          <ButtonArmy value="เปลี่ยนใจ ไม่ลบแล้ว" color="blue" OnClick={closeModal} />{" "}
          <ButtonArmy value="แน่ใจแล้ว ลบแน่นอล" color="red" OnClick={() => handle(userId)} />
        </div>
      </div>
    </ModalReact>
  );
};

export default Modal;
