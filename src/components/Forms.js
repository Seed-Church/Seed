import React, { useState } from "react";
import Form from "./shared/Form";
import SelectBox from "./shared/SelectBox";
import DateForm from "./shared/DateForm";
import Title from "./shared/Title";
import { mentors, groups, status } from "./mock/option";
import useInput from "./hook/useInput";
import useInputDate from "./hook/useInputDate";
import Alert from "../components/shared/Alert";
import FormUpload from "../components/shared/FormUpload";

const Forms = (props) => {
  const [isOpenAlert, setOpenAlert] = useState(false);
  const { value: firstName, bind: bindfirstName, reset: resetfirstName } = useInput("army");
  const { value: lastName, bind: bindlastName, reset: resetlastName } = useInput("god");
  const { value: nickName, bind: bindnickName, reset: resetnickName } = useInput("inw");
  const { value: Age, bind: bindAge, reset: resetAge } = useInput("22");
  const { value: Facebook, bind: bindFacebook, reset: resetFacebook } = useInput("facebook/army");
  const { value: Tel, bind: bindTel, reset: resetTel } = useInput("093580486");
  const { value: Address, bind: bindAddress, reset: resetAddress } = useInput("9/1 กะทู้");
  const { value: Ability, bind: bindAbility, reset: resetAbility } = useInput("กระโดดตบ");
  const { value: Mentor, bind: bindMentor, reset: resetMentor } = useInput(0);
  const { value: Group, bind: bindGroup, reset: resetGroup } = useInput(0);
  const { value: Status, bind: bindStatus, reset: resetStatus } = useInput(0);
  const { startDate: DateBelieve, bind: bindDateBelieve, reset: resetDateBelieve } = useInputDate(new Date());
  const { value: Position, bind: bindPosition, reset: resetPosition } = useInput("ขายน้ำ");
  const { value: Salary, bind: bindSalary, reset: resetSalary } = useInput("180000");
  const { value: Where, bind: bindWhere, reset: resetWhere } = useInput("ไม่บอก");
  const isOpen = false;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      firstName: firstName,
      lastName: lastName,
      nickName: nickName,
      Age: Age,
      Facebook: Facebook,
      Tel: Tel,
      Address: Address,
      Ability: Ability,
      Ability: Ability,
      Mentor: Mentor,
      Group: Group,
      Status: Status,
      DateBelieve: DateBelieve,
      Position: Position,
      Salary: Salary,
      Where: Where,
    };
    props.dispatchAddUser(data);

    setOpenAlert(true);
    resetfirstName();
    resetlastName();
    resetnickName();
    resetAge();
    resetFacebook();
    resetTel();
    resetAddress();
    resetAbility();
    resetMentor();
    resetGroup();
    resetStatus();
    resetDateBelieve();
    resetPosition();
    resetSalary();
    resetWhere();
  };

  return (
    <React.Fragment>
      <Title name="Form" />
      {isOpenAlert ? <Alert /> : ""}
      <form className="mx-8" onSubmit={handleSubmit}>
        <p className="mt-8 font-bold">ข้อมูลทั่วไป</p>
        <div className="flex flex-wrap mb-6 mt-3">
          <Form label="ชื่อต้น" type="text" hook={bindfirstName} />
          <Form label="นามสกุล" type="text" hook={bindlastName} />
          <Form label="ชื่อเล่น" type="text" hook={bindnickName} />
          <Form label="อายุ" type="number" hook={bindAge} />
        </div>
        <div className="flex flex-wrap  mb-6 mt-3">
          <Form label="facebook" type="text" hook={bindFacebook} />
          <Form label="เบอร์มือถือ" type="number" hook={bindTel} />
          <Form label="ที่อยู่" test="กะทู้แลน" type="text" hook={bindAddress} />
          <Form label="ความสามารถพิเศษ" type="text" hook={bindAbility} />
        </div>
        <p className="mt-8 font-bold">ข้อมูลฝ่ายวิญญาณ</p>
        <div className="flex flex-wrap  mb-2">
          <SelectBox label="พี่เลี้ยง" test={mentors} hook={bindMentor} />
          <SelectBox label="กลุ่มแคร์" test={groups} hook={bindGroup} />
          <SelectBox label="ระดับความเชื่อ" test={status} hook={bindStatus} />
          <DateForm label="วันที่เชื่อ" hook={bindDateBelieve} selected={DateBelieve} />
        </div>
        <p className="mt-8 font-bold">ข้อมูลอาชีพ</p>
        <div className="flex flex-wrap  mb-2">
          <Form label="อาชีพ" type="text" hook={bindPosition} />
          <Form label="รายได้" type="number" hook={bindSalary} />
          <Form label="ทำที่ไหน" type="text" hook={bindWhere} />
        </div>
        <div className="flex flex-wrap mb-6 mt-3">
          <div className="w-full md:w-1/2 px-4 md:mb-0 mt-3">
          <p className="mt-8 font-bold">เพิ่มรูปตัวเอง</p>
            <FormUpload />
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 px-4 md:mb-0 mt-3">
            <button className="bg-red-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              เคลียร์ข้อมูล
            </button>{" "}
            <input
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              value="เพิ่มข้อมูล"
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Forms;
