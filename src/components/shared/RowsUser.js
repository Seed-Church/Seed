import React from "react";
import ButtonArmy from "../shared/ButtonArmy";
// import ModalReact from "react-modal";
// ModalReact.setAppElement("#root");
import name from "../shared/Modal";
import Modal from "../shared/Modal";
const RowsUser = ({ user, props }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
          {user.nickName} {user.firstName} {user.lastName}
        </td>
        <td className="border-grey-light border hover:bg-gray-100 p-3">{user.usersRelation.statuses.name}</td>
        <td className="border-grey-light border hover:bg-gray-100 p-3">{user.usersRelation.groups.name}</td>
        <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
          <ButtonArmy value="แก้ไข" color="yellow" OnClick={() => handleEditClick(user.id)} />{" "}
          <ButtonArmy value="ลบ" color="red" OnClick={openModal} />
        </td>
      </tr>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        handle={handleDeleteClick}
        userId={user.id}
      />
    </React.Fragment>
  );
};

export default RowsUser;
