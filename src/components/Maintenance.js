import React from "react";
import Amp from '../asset/img/amp.jpg'
const Maintenance = () => {
  return (
    <React.Fragment>
      <div class="p-6">
        <div class="text-center text-5xl">
        🚧 กำลังทำพัฒนาอยู่จ้า 🚧
        </div>
        <img class="object-scale-down h-64 w-full ..." src={Amp} />
      </div>
    </React.Fragment>
  );
};

export default Maintenance;
