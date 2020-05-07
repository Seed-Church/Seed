import React from "react";
import Card from "./shared/Card";
import Title from "./shared/Title";
const Cards = () => {
  return (
    <React.Fragment>
      <Title name="Card" />
      <div className="flex flex-wrap">
        <Card
          title="จำนวนผู้ใช้ทั้งหมด"
          value="777"
          color="border-green-600"
          icon="fa fa-wallet fa-2x fa-inverse"
          iconColor="rounded-full p-5 bg-green-600"
        />
        <Card
          title="จำนวนคนเฝ้าเดียว"
          value="12"
          color="border-orange-600"
          icon="fas fa-users fa-2x fa-inverse"
          iconColor="rounded-full p-5 bg-orange-600"
        />
        <Card
          title="สถานะระบบ"
          value="กำลังทดสอบ"
          color="border-orange-600"
          icon="fas fa-users fa-2x fa-inverse"
          iconColor="rounded-full p-5 bg-orange-600"
        />
      </div>
    </React.Fragment>
  );
};

export default Cards;
