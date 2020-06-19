import React from "react";
import ModalReact from "react-modal";
import ButtonArmy from "./shared/ButtonArmy";
ModalReact.setAppElement("#root");
const Modal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const openModal = () => setIsOpen(true);
  const afterOpenModal = () => {};
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div className="w-full md:w-1/2 px-4 md:mb-0 mt-3">
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={openModal}>
          เปิด popup
        </button>
      </div>

      <ModalReact
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">⚠️ จะลบข้อมูลผู้ใช้จริง ๆ หรอ ! </p>
          </div>
          <div className="flex justify-end pt-2">
            <ButtonArmy value="เปลี่ยนใจ ไม่ลบแล้ว" color="blue" />{" "}
            <ButtonArmy value="แน่ใจแล้ว ลบแน่นอล" color="red" OnClick={closeModal} />
          </div>
        </div>
      </ModalReact>
    </div>
  );
};

export default Modal;
