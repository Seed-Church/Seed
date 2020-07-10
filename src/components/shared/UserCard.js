import React from "react";
import moment from "moment";
import Modal from "./Modal";
import ButtonArmy from "../shared/ButtonArmy";

const UserCard = ({ user, props }) => {
  const currectDate = moment(moment().toArray());
  const userDate = moment(user.dateBelieve).toArray();
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
      <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-8">
        <img
          className="w-full h-auto object-cover object-center"
          // src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          src={user.pictureProfile}
          alt="avatar"
        />
        <div className="flex items-center px-6 py-3 bg-gray-900">
          <h1 className="mx-3 text-white font-semibold text-md">
            {user.nickName} {user.firstName} {user.lastName} อายุ {user.Age}
          </h1>
        </div>
        <div className="py-4 px-6">
          <p className="py-2 text-sm  text-blue-600">
            📜 Story เรื่องราวของบุคคลนี้ .. นิสัย บุคคลิก สัก 2-3 บรรทัด Story เรื่องราวของบุคคลนี้ .. นิสัย บุคคลิก
            สัก 2-3 บรรทัด
          </p>
          <div className="flex items-center mt-4 text-yellow-500">
            👩‍🏫 <h1 className="px-2 text-sm">พี่เลี้ยง ใครสักคน</h1>
          </div>
          <div className="flex items-center mt-4 text-pink-600">
            👨‍👩‍👧‍👦 <h1 className="px-2 text-sm">กลุ่มแคร์ {user.usersRelation.groups.name}</h1>
            💕 <h1 className="px-2 text-sm">สถานะ {user.usersRelation.statuses.name}</h1>
          </div>
          <div className="flex items-center mt-4 text-teal-600">
            📅 <h1 className="px-2 text-sm">{user.dateBelieve}</h1>
            ⏱️ <h1 className="px-2 text-sm">มีความเชื่อมาแล้ว {currectDate.diff(userDate, `day`)} วัน </h1>
          </div>
          <div className="flex items-center mt-4 text-blue-300">
            <i className="fab fa-facebook-square fa-lg"></i> <h1 className="px-2 text-sm"> {user.facebook}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            🏠 <h1 className="px-2 text-sm"> {user.Address}</h1>
          </div>
          <div className="flex items-center mt-4 text-purple-600">
            📱 <h1 className="px-2 text-sm"> {user.Tel}</h1>
          </div>
          <div className="flex items-center mt-4 text-yellow-600">
            📌 <h1 className="px-2 text-sm"> อาชีพ {user.usersRelation.careers.position}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <div className="px-2 text-sm">
              <ButtonArmy value="ยังคิดไม่ออก" color="teal" />{" "}
            </div>
            <div className="px-2 text-sm">
              <ButtonArmy value="แก้ไข" color="yellow" OnClick={() => handleEditClick(user.id)} />{" "}
            </div>
            <div className="px-2 text-sm">
              <ButtonArmy value="ลบ" color="red" OnClick={openModal} />
            </div>
          </div>
        </div>
      </div>
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

export default UserCard;
