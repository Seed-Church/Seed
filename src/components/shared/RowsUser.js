import React from "react";
import ModalReact from "react-modal";
import ButtonArmy from "../shared/ButtonArmy";
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
      <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
        <td className="border-grey-light border hover:bg-gray-100 p-3">{user.id}</td>
        <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
          <div className="flex-shrink-0 w-10 h-10">
            <img className="w-full h-full rounded-full" src={user.pictureProfile} alt="" />
          </div>{" "}
          {user.nickName} {user.firstName} {user.lastName}
        </td>
        <td className="border-grey-light border hover:bg-gray-100 p-3">{user.facebook}</td>
        {/* <td className="border-grey-light border hover:bg-gray-100 p-3">{user.Tel}</td>
        <td className="border-grey-light border hover:bg-gray-100 p-3">{user.dateBelieve}</td>
        <td className="border-grey-light border hover:bg-gray-100 p-3">{user.Address}</td> */}
        <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
          <ButtonArmy value="แก้ไข" color="yellow" OnClick={() => handleEditClick(user.id)} />{" "}
          <ButtonArmy value="ลบ" color="red" OnClick={openModal} />
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
            <ButtonArmy value="เปลี่ยนใจ ไม่ลบแล้ว" color="blue" OnClick={closeModal} />{" "}
            <ButtonArmy value="แน่ใจแล้ว ลบแน่นอล" color="red" OnClick={() => handleDeleteClick(user.id)} />
          </div>
        </div>
      </ModalReact>
    </React.Fragment>
  );
};

export default RowsUser;
