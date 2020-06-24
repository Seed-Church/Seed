import moment from "moment";
export const fakeValue = {
  defaultValues: {
    firstName: "ไทยไทย",
    nickName: "หอย",
    lastName: "บ้า",
    Age: 15,
    Tel: "0935",
    Facebook: "ไทยทย",
    Ability: "English",
    Address: "English",
    Mentor: 1,
    Group: 1,
    Status: 1,
    Position: "คนขายม้า",
    Salary: "ผิด",
    Where: "ที่บ้านที่บ้านที่บ้านที่บ้าน./_@",
    dateBelieve: moment(new Date()).toDate(),
  },
};

const expectStringEnglish = () => /^[A-Za-z]+$/i);
const expectStringEnglishWithNumber = () => /^[A-Za-z0-9]+$/i;
const expectStringEnglishWithNumberWithSpecial = (str) => /^[A-Za-z0-9_.-/@]+$/i;
const expectStringThai = () => /^[ก-ฮ]+$/i;
const expectStringThaiWithNumber = () => /^[ก-ฮ0-9]+$/i;
const expectStringThaiWithNumberWithSpecial  = (str) => /^[ก-ฮ0-9_.-/@]+$/i;
const expectStringEngORThaiWithNumber = () => /^[A-Za-z0-9ก-ฮ]+$/i;

export const patternName = {
  required: "ห้ามเป็นค่าว่าง",
  maxLength: { value: 25, message: "ไม่เกิน 25 ตัวอักษร" },
  pattern: {
    value: expectStringThai(),
    message: "ภาษาไทยเท่านั้น",
  },
};

export const patternAge = {
  required: "ห้ามเป็นค่าว่าง",
  min: {
    value: 5,
    message: "อายุขั้นต่ำ 5",
  },
  max: {
    value: 99,
    message: "อายุมากสุด 99",
  },
};

export const patternFacebook = {
  maxLength: { value: 25, message: "ไม่เกิน 25 ตัวอักษร" },
  pattern: {
    value: expectStringEnglishWithNumberWithSpecial(),
    message: "ภาษาอังกฤษ ตัวเลข และ ./_@ เท่านั้น",
  },
};

export const patternTel = {
  pattern: {
    value: /^[0-9]{10}$/i,
    message: "ตัวเลข 10 ตัวเท่านั้น",
  },
};

export const patternAddress = {
  maxLength: { value: 50, message: "ไม่เกิน 50 ตัวอักษร" },
  pattern: {
    value: expectStringThaiWithNumberWithSpecial(),
    message: "ภาษาไทยและ ./_@ เท่านั้น",
  },
};

export const patternAbility = {
  maxLength: { value: 25, message: "ไม่เกิน 25 ตัวอักษร" },
  pattern: {
    value: expectStringThai,
    message: "ภาษาไทยเท่านั้น",
  },
};


export const patternSelect = {
  maxLength: { value: 25, message: "ไม่เกิน 25 ตัวอักษร" },
  required: "ห้ามเป็นค่าว่าง",
};


export const patternSalary = {
  pattern: {
    value: /^[0-9]+$/i,
    message: "ตัวเลขเท่านั้น",
  },
};

