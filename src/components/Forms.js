import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./shared/Form";
import SelectBox from "./shared/SelectBox";
import DateForm from "./shared/DateForm";
import Title from "./shared/Title";
import useInput from "./hook/useInput";
import useInputDate from "./hook/useInputDate";
import useInputFile from "./hook/useInputFile";
import Alert from "../components/shared/Alert";
import { mentors, groups, status } from "./mock/option";
import FormData from "form-data";

const Forms = (props) => {
  const { register, handleSubmit, watch, errors, control } = useForm({
    defaultValues: {
      firstName: "bill",
      nickName: "หอย",
      lastName: "บ้า",
      Age: 15,
      Tel: "095801444",
      Facebook: "facebook/inwza",
      Ability: "ว่ายน้ำ",
      Address: "วัง",
      Mentor: 1,
      Group: 1,
      Status: 1,
      Position: "คนขายม้า",
      Salary: 1500000,
      Where: "ที่บ้าน",
      Where: "ที่บ้าน",
      dateBelieve: new Date(),
    },
  });

  const [isOpenAlert, setOpenAlert] = useState(false);
  const onSubmit = (data) => {
    let date = JSON.stringify(data.dateBelieve);
    date = date.slice(1,11)

    let form = new FormData();
    form.append("firstName", data.firstName);
    form.append("nickName", data.nickName);
    form.append("lastName", data.lastName);
    form.append("dateBelieve", date);
    form.append("Age", data.Age);
    form.append("Tel", data.Tel);
    form.append("facebook", data.Facebook);
    form.append("ability", data.Ability);
    form.append("Address", data.Address);
    form.append("Mentor", data.Mentor);
    form.append("Group", data.Group);
    form.append("Status", data.Status);
    form.append("Position", data.Position);
    form.append("Salary", data.Salary);
    form.append("Where", data.Where);
    form.append("pictureProfile", data.ProfilePicture[0]);

    props.dispatchAddUser(form);
  };

  return (
    <React.Fragment>
      <Title name="Form" />
      {isOpenAlert ? <Alert /> : ""}
      <form className="mx-8" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <p className="mt-8 font-bold">ข้อมูลทั่วไป</p>
        <div className="flex flex-wrap mb-6 mt-3">
          <Form label="ชื่อต้น" type="text" name="firstName" register={register} />
          <Form label="นามสกุล" type="text" name="lastName" register={register} />
          <Form label="ชื่อเล่น" type="text" name="nickName" register={register} />
          <Form label="อายุ" type="number" name="Age" register={register} />
        </div>
        <div className="flex flex-wrap  mb-6 mt-3">
          <Form label="facebook" type="text" name="Facebook" register={register} />
          <Form label="เบอร์มือถือ" type="number" name="Tel" register={register} />
          <Form label="ที่อยู่" type="text" name="Address" register={register} />
          <Form label="ความสามารถพิเศษ" type="text" name="Ability" register={register} />
        </div>
        <p className="mt-8 font-bold">ข้อมูลฝ่ายวิญญาณ</p>
        <div className="flex flex-wrap  mb-2">
          <SelectBox label="พี่เลี้ยง" test={mentors} name="Mentor" register={register} />
          <SelectBox label="กลุ่มแคร์" test={groups} name="Group" register={register} />
          <SelectBox label="ระดับความเชื่อ" test={status} name="Status" register={register} />
          <DateForm label="วันที่เชื่อ" name="dateBelieve" controlPassing={control} register={register} />
        </div>
        <p className="mt-8 font-bold">ข้อมูลอาชีพ</p>
        <div className="flex flex-wrap  mb-2">
          <Form label="อาชีพ" type="text" name="Position" register={register} />
          <Form label="รายได้" type="number" name="Salary" register={register} />
          <Form label="ทำที่ไหน" type="text" name="Where" register={register} />
        </div>
        <div className="flex flex-wrap mb-6 mt-3">
          <Form label="รูปตัวเอง" type="file" name="ProfilePicture" register={register} />
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 px-4 md:mb-0 mt-3">
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
