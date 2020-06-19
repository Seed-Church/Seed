import React from "react";
import ModalReact from "react-modal";
import ButtonArmy from "../shared/ButtonArmy";
import Modal from '../../components/Modal'
ModalReact.setAppElement("#root");

const RowsUser = ({ user, props }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
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
  const openModal = () => setIsOpen(true);
  const afterOpenModal = () => {};
  const closeModal = () => setIsOpen(false);

  const handleEditClick = async (id) => {
    props.dispatchEditUser(id);
    props.history.push(`/form/${id}/edit`);
  };
  const handleDeleteClick = async (id) => {
    await props.dispatchDeleteUser(id);
    setTimeout(() => {
      props.dispatchFetchUsers();
    }, 200);
  };
  return (
    <React.Fragment>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{user.id}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img className="w-full h-full rounded-full" src={user.pictureProfile} alt="" />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">
                {user.firstName} `{user.nickname}` {user.lastName}
              </p>
            </div>
          </div>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{user.facebook}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{user.Tel}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
            <span aria-hidden className={"absolute inset-0 opacity-50 rounded-full"}></span>
            <span className="relative">{user.dateBelieve}</span>
          </span>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{user.Address}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <ButtonArmy value="แก้ไข" color="yellow" OnClick={() => handleEditClick(user.id)}  /> {" "}
          <ButtonArmy value="ลบ" color="red" OnClick={openModal}  />
        </td>
      </tr>

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
            <ButtonArmy value="เปลี่ยนใจ ไม่ลบแล้ว" color="blue" OnClick={closeModal}/>{" "}
            <ButtonArmy value="แน่ใจแล้ว ลบแน่นอล" color="red"  OnClick={() => handleDeleteClick(user.id)}/>
          </div>
        </div>
      </ModalReact>
    </React.Fragment>
  );
};

export default RowsUser;
