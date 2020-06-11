import React, { useState } from "react";
import Form from "./shared/Form";
import SelectBox from "./shared/SelectBox";
import DateForm from "./shared/DateForm";
import Title from "./shared/Title";
import useInput from "./hook/useInput";
import useInputDate from "./hook/useInputDate";
import useInputFile from "./hook/useInputFile";
import Alert from "./shared/Alert";
import { mentors, groups, status } from "./mock/option";
import FormData from "form-data";

const FormsEdit = (props) => {
  console.log(`props`,props.items.firstName);
  const [isOpenAlert, setOpenAlert] = useState(false);
  const { value: firstName, bind: bindfirstName, reset: resetfirstName } = useInput();
  const { value: lastName, bind: bindlastName, reset: resetlastName } = useInput(`TEST`);
  const { value: nickName, bind: bindnickName, reset: resetnickName } = useInput();
  const { value: Age, bind: bindAge, reset: resetAge } = useInput();
  const { value: Facebook, bind: bindFacebook, reset: resetFacebook } = useInput();
  const { value: Tel, bind: bindTel, reset: resetTel } = useInput();
  const { value: Address, bind: bindAddress, reset: resetAddress } = useInput();
  const { value: Ability, bind: bindAbility, reset: resetAbility } = useInput();
  const { value: Mentor, bind: bindMentor, reset: resetMentor } = useInput(1);
  const { value: Group, bind: bindGroup, reset: resetGroup } = useInput(1);
  const { value: Status, bind: bindStatus, reset: resetStatus } = useInput(1);
  const { startDate: DateBelieve, bind: bindDateBelieve, reset: resetDateBelieve } = useInputDate();
  const { value: Position, bind: bindPosition, reset: resetPosition } = useInput();
  const { value: Salary, bind: bindSalary, reset: resetSalary } = useInput();
  const { value: Where, bind: bindWhere, reset: resetWhere } = useInput();
  const { value: ProfilePicture, bind: bindProfilePicture, reset: resetProfilePicturetFile } = useInputFile([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let form = new FormData();
    form.append("firstName", firstName);
    form.append("nickName",nickName);
    form.append("lastName", lastName);
    form.append("dateBelieve", DateBelieve)
    form.append("Age", Age)
    form.append("Tel", Tel)
    form.append("facebook", Facebook)
    form.append("ability", Ability)
    form.append("Address", Address)
    form.append("Mentor", parseInt(Mentor))
    form.append("Group", parseInt(Group))
    form.append("Status", parseInt(Status))
    form.append("Position", Position)
    form.append("Salary", Salary)
    form.append("Where", Where)
    form.append("pictureProfile", ProfilePicture[0]);
 
    props.dispatchAddUser(form);

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
    resetProfilePicturetFile();
  };

  return (
    <React.Fragment>
      <Title name="FormEdit" />
      {isOpenAlert ? <Alert /> : ""}
      <form className="mx-8" onSubmit={handleSubmit} encType="multipart/form-data">
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
          <Form label="รูปตัวเอง" type="file" hook={bindProfilePicture} />
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 px-4 md:mb-0 mt-3">
            {/* <button className="bg-red-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              เคลียร์ข้อมูล
            </button>{" "} */}
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

export default FormsEdit;
