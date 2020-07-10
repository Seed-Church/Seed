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
      <tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
              <img
                class="w-full h-full rounded-full"
                src={user.pictureProfile}
                alt=""
              />
            </div>
            <div class="ml-3">
  <p class="text-gray-900 whitespace-no-wrap">{user.nickName} {user.firstName} {user.lastName}</p>
            </div>
          </div>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">Admin</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
            <span class="relative">Activo</span>
          </span>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <ButtonArmy value="แก้ไข" color="yellow" OnClick={() => handleEditClick(user.id)} />{" "}
          <ButtonArmy value="ลบ" color="red" OnClick={openModal} />
        </td>
      </tr>
      <Modal isOpen={modalIsOpen} onAfterOpen={afterOpenModal} onRequestClose={closeModal} handle={handleDeleteClick} userId={user.id} />
    </React.Fragment>
  );
};

export default RowsUser;
