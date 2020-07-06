import React from "react";

const UserCard = ({ user }) => {
  console.log(user);

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-8">
      <img
        className="w-full h-56 object-cover object-center"
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
        <p className="py-2 text-sm text-gray-700">
         📜 Story เรื่องราวของบุคคลนี้ .. นิสัย บุคคลิก สัก 2-3 บรรทัด Story เรื่องราวของบุคคลนี้ .. นิสัย บุคคลิก สัก 2-3
          บรรทัด
        </p>
        <div className="flex items-center mt-4 text-gray-700">
          👨‍👩‍👧‍👦 <h1 className="px-2 text-sm">กลุ่มแคร์ {user.usersRelation.groups.name}</h1>
          💕 <h1 className="px-2 text-sm">สถานะ {user.usersRelation.statuses.name}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          📅 <h1 className="px-2 text-sm">{user.dateBelieve}</h1>
          ⏱️ <h1 className="px-2 text-sm">มีความเชื่อมาแล้ว 777 ปี </h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <i class="fab fa-facebook-square fa-lg"></i> <h1 className="px-2 text-xs"> {user.facebook}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          🏠 <h1 className="px-2 text-sm"> {user.Address}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          📱 <h1 className="px-2 text-sm"> {user.Tel}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
         📌 <h1 className="px-2 text-sm"> อาชีพ {user.usersRelation.careers.position}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
