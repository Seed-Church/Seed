import React from "react";

const UserCard = ({ user }) => {
  console.log(user);

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-8">
      <img
        className="w-full h-56 object-cover object-center"
        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        alt="avatar"
      />
      <div className="flex items-center px-6 py-3 bg-gray-900">
        {/* <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
          <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
        </svg> */}
        {/* <h1 className="mx-3 text-white font-semibold text-md">ทดลอง</h1> */}
        <h1 className="mx-3 text-white font-semibold text-md">
          {user.nickName} {user.firstName} {user.lastName} {user.Age}
        </h1>
      </div>
      <div className="py-4 px-6">
        <p className="py-2 text-xs text-gray-700">
          Story เรื่องราวของบุคคลนี้ .. นิสัย บุคคลิก สัก 2-3 บรรทัด Story เรื่องราวของบุคคลนี้ .. นิสัย บุคคลิก สัก 2-3
          บรรทัด
        </p>
        <div className="flex items-center mt-4 text-gray-700">
          👨‍👩‍👧‍👦 <h1 className="px-2 text-xs">กลุ่มแคร์ {user.usersRelation.groups.name}</h1>
          💕 <h1 className="px-2 text-xs">สถานะ {user.usersRelation.statuses.name}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          📅 <h1 className="px-2 text-xs">{user.dateBelieve}</h1>
          ⏱️ <h1 className="px-2 text-xs">มีความเชื่อมาแล้ว 777 ปี </h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <i class="fab fa-facebook-square fa-lg"></i> <h1 className="px-2 text-xs"> {user.facebook}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          🏠 <h1 className="px-2 text-xs"> {user.Address}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          📱 <h1 className="px-2 text-xs"> {user.Tel}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
         📌 <h1 className="px-2 text-xs"> อาชีพ {user.usersRelation.careers.position}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
