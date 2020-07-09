import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "./shared/Form";
import SelectBox from "./shared/SelectBox";
import DateForm from "./shared/DateForm";
import Title from "./shared/Title";
import Alert from "../components/shared/Alert";
import FormData from "form-data";
import moment from "moment";
import Resizer from "react-image-file-resizer";
import {
  expectFakeValue,
  UnExpectFakeValue,
  patternName,
  patternAge,
  patternFacebook,
  patternTel,
  patternAddress,
  patternSalary,
  patternFile,
} from "./mock/form";
const Forms = (props) => {
  let flags = { complete: 0, no_action: 1, something_wrong: 2, edit: 3 };
  const [ButtonStyle, setButtonStyle] = useState({ color: `blue`, name: `เพิ่มข้อมูล` });
  const [isOpenAlert, setOpenAlert] = useState(flags.no_action);
  const [previousGroup, setPreviousGroup] = useState({});
  const [previousStatus, setPreviousStatus] = useState({});
  const { register, handleSubmit, watch, errors, control, setValue, patternSelect } = useForm(expectFakeValue);
  const [previewImage, setpreviewImage] = useState("");
  useEffect(() => {
    props.dispatchFetchStatuses();
    props.dispatchFetchGroups();
    if (props.editing && props.items.usersRelation) {
      setButtonStyle({ color: `yellow`, name: `แก้ไขข้อมูล` });
      setValue("firstName", props.items.firstName);
      setValue("nickName", props.items.nickName);
      setValue("lastName", props.items.lastName);
      setValue("dateBelieve", moment(props.items.dateBelieve).toDate());
      setValue("Age", props.items.Age);
      setValue("Tel", props.items.Tel);
      setValue("Facebook", props.items.facebook);
      setValue("Ability", props.items.ability);
      setValue("Address", props.items.Address);
      setValue("Mentor", props.items.Mentor);
      setValue("Groups", props.items.usersRelation.groups);
      setValue("Statuses", props.items.usersRelation.statuses);
      setPreviousGroup(props.items.usersRelation.groups);
      setPreviousStatus(props.items.usersRelation.statuses);
      setValue("Position", props.items.usersRelation.careers.position);
      setValue("Salary", props.items.usersRelation.careers.salary);
      setValue("Where", props.items.usersRelation.careers.address);
      setValue("pictureProfile", props.items.pictureProfile);
    }
  }, [props.items, props.editing]);
  const handleChangeUpload = (event) => {
    console.log(`handleChangeUpload`, event.target.files[0]);
    if (event.target.files[0] !== undefined) {
      Resizer.imageFileResizer(
        event.target.files[0],
        300,
        300,
        "PNG",
        100,
        0,
        (uri) => {
          setpreviewImage(URL.createObjectURL(uri));
        },
        "blob"
      );
      //setpreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onSubmit = (data) => {
    console.log(`data`, data);
    let form = new FormData();
    form.append("firstName", data.firstName);
    form.append("nickName", data.nickName);
    form.append("lastName", data.lastName);
    form.append("dateBelieve", moment(data.dateBelieve).format("YYYY-MM-DD"));
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
    Resizer.imageFileResizer(
      data.ProfilePicture[0],
      300,
      300,
      "PNG",
      100,
      0,
      (images) => {
        form.append("pictureProfile", images);
      },
      "blob"
    );

    if (props.editing) {
      props.dispatchUpdateUser(props.items.id, form);
      setOpenAlert(flags.edit);
    } else {
      props.dispatchAddUser(form);
      setOpenAlert(flags.complete);
      setValue("firstName", "");
      setValue("nickName", "");
      setValue("lastName", "");
      setValue("dateBelieve", moment(new Date()).toDate());
      setValue("Age", "");
      setValue("Tel", "");
      setValue("Facebook", "");
      setValue("Ability", "");
      setValue("Address", "");
      setValue("Mentor", "");
      setValue("Groups", "");
      setValue("Statuses", "");
      setPreviousGroup("");
      setPreviousStatus("");
      setValue("Position", "");
      setValue("Salary", "");
      setValue("Where", "");
      setValue("pictureProfile", "");
      setpreviewImage("");
    }

    //props.history.push(`/board`);
  };
  return (
    <React.Fragment>
      <Title name="Form" />
      {isOpenAlert === flags.complete ? (
        <Alert color="teal" topic="เพิ่มข้อมูลเรียบร้อย" message="ข้อมูลถูกเพิ่มลงในฐานข้อมูลแล้ว" />
      ) : isOpenAlert === flags.something_wrong ? (
        <Alert color="red" topic="เพิ่มข้อมูลไม่ได้" message="ข้อมูลยังไม่ถูกเพิ่มในฐานข้อมูล" />
      ) : isOpenAlert === flags.edit ? (
        <Alert color="yellow" topic="แก้ไขข้อมูลเรียบร้อย" message="ข้อมูลถูกแก้ไข้ไปยังฐานข้อมูลแล้ว" />
      ) : (
        ``
      )}

      <form className="mx-8" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <p className="mt-8 font-bold">ข้อมูลทั่วไป</p>
        <div className="flex flex-wrap mb-6 mt-3">
          <Form
            label="ชื่อต้น"
            type="text"
            name="firstName"
            register={register(patternName)}
            errors={errors.firstName}
          />
          <Form label="นามสกุล" type="text" name="lastName" register={register(patternName)} errors={errors.lastName} />
          <Form
            label="ชื่อเล่น"
            type="text"
            name="nickName"
            register={register(patternName)}
            errors={errors.nickName}
          />
          <Form label="อายุ" type="number" name="Age" register={register(patternAge)} errors={errors.Age} />
        </div>
        <div className="flex flex-wrap  mb-6 mt-3">
          <Form
            label="facebook"
            type="text"
            name="Facebook"
            register={register(patternFacebook)}
            errors={errors.Facebook}
          />
          <Form label="เบอร์มือถือ" type="text" name="Tel" register={register(patternTel)} errors={errors.Tel} />
          <Form
            label="ที่อยู่"
            type="text"
            name="Address"
            register={register(patternAddress)}
            errors={errors.Address}
          />
          <Form
            label="ความสามารถพิเศษ"
            type="text"
            name="Ability"
            register={register(patternAddress)}
            errors={errors.Ability}
          />
        </div>
        <p className="mt-8 font-bold">ข้อมูลฝ่ายวิญญาณ</p>
        <div className="flex flex-wrap  mb-2">
          <SelectBox label="พี่เลี้ยง" name="Mentor" register={register} />
          <SelectBox
            label="กลุ่มแคร์"
            values={props.groups}
            name="Group"
            isEditing={props.editing}
            previousValue={previousGroup}
            register={register(patternSelect)}
            errors={errors.Group}
          />
          <SelectBox
            label="ระดับความเชื่อ"
            values={props.statuses}
            name="Status"
            isEditing={props.editing}
            previousValue={previousStatus}
            register={register(patternSelect)}
            errors={errors.Status}
          />
          <DateForm label="วันที่เชื่อ" name="dateBelieve" controlPassing={control} register={register} />
        </div>
        <p className="mt-8 font-bold">ข้อมูลอาชีพ</p>
        <div className="flex flex-wrap  mb-2">
          <Form label="อาชีพ" type="text" name="Position" register={register(patternName)} errors={errors.Position} />
          <Form label="รายได้" type="number" name="Salary" register={register(patternSalary)} errors={errors.Salary} />
          <Form label="ทำที่ไหน" type="text" name="Where" register={register(patternAddress)} errors={errors.Where} />
        </div>
        <div className="flex flex-wrap mb-6 mt-3">
        <img
          className="w-48 h-48 object-cover object-center"
          src={props.items.pictureProfile}
          alt="avatar"
        />
          <Form
            label="รูปตัวเอง"
            type="file"
            name="ProfilePicture"
            register={register(patternFile)}
            errors={errors.ProfilePicture}
            onChange={handleChangeUpload}
          />
        </div>
        <div className="flex flex-wrap mb-6 mt-3">
          <div className="bg-gray-400">
            {previewImage !== "" ? (
              <img
                className="object-contain sm:object-cover md:object-fill lg:object-none xl:object-scale-down"
                src={previewImage}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 px-4 md:mb-0 mt-3">
            <input
              type="submit"
              className={`bg-${ButtonStyle.color}-500 hover:bg-${ButtonStyle.color}-400 text-white font-bold py-2 px-4 border-b-4 border-${ButtonStyle.color}-700 hover:border-${ButtonStyle.color}-500 rounded`}
              value={ButtonStyle.name}
            />
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Forms;
